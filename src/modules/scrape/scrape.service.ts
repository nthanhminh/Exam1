import { Inject, Injectable, OnModuleDestroy } from "@nestjs/common";
import { By, Key, until, WebDriver, WebElement } from "selenium-webdriver";

@Injectable()
export class ScrapeService implements OnModuleDestroy {
    constructor(
        @Inject('DRIVER_PROVIDER')
        private readonly driver: WebDriver
    ) {}

    async onModuleDestroy() {
        await this.driver.quit();
    }

    async getInformationOfAddress(address: string) {
        await this.driver.get('https://www.redfin.com/');

        const searchBox = await this.waitElement(By.css('input[data-rf-test-name="search-box-input"]'), 10000);
        if (!searchBox) throw new Error('Search box not found');

        await searchBox.clear();

        for (const char of address) {
            await searchBox.sendKeys(char);
            await this.driver.sleep(100);
        }

        await searchBox.sendKeys(Key.ENTER);

        await this.driver.wait(until.urlContains('/home/'), 15000);

        const basic: Record<string, any> = {
            fullAddress: await this.findAddress(),
            propertyType: await this.findPropertyType(),
            ...(await this.findPublicFact())
        };

        const detailSections = ['Parking', 'Interior', 'Exterior', 'Financial', 'Utilities', 'Location'];
        const details = {};

        for (const section of detailSections) {
            details[`${section.toLowerCase()}Info`] = await this.findAdvancedInfo(section);
        }

        try {
            const image = await this.driver.findElement(By.css('.InlinePhotoPreviewRedesign-Container img'));
            await image.click();
            basic["imageUrls"] = await this.getAllImage();
        } catch {
            basic["imageUrls"] = [];
        }

        return { data: { basic, details } };
    }

    private async waitElement(locator: By, timeout = 5000): Promise<WebElement | null> {
        try {
            return await this.driver.wait(until.elementLocated(locator), timeout);
        } catch {
            return null;
        }
    }

    private async findAddress(): Promise<string | null> {
        try {
            const streetEl = await this.driver.findElement(By.css('div[data-rf-test-id="abp-streetLine"]'));
            const cityStateZipEl = await this.driver.findElement(By.css('div[data-rf-test-id="abp-cityStateZip"]'));

            const street = await streetEl.getText();
            const cityStateZip = await cityStateZipEl.getText();

            return `${street} ${cityStateZip}`.replace(/\s+/g, ' ').trim();
        } catch {
            return null;
        }
    }

    private async findPublicFact(): Promise<Record<string, any>> {
        const info = {
            bedrooms: null,
            bathrooms: null,
            totalSqft: null,
            lotSqft: null,
            yearBuilt: null
        };

        const xpath = "//h3[div[contains(., 'Public facts')]]/ancestor::div[contains(@class, 'ExpandableAmenitiesInfoRow')]";

        const section = await this.waitElement(By.xpath(xpath), 10000);
        if (!section) return info;

        const items = await section.findElements(By.css('li.entryItem'));

        for (const item of items) {
            const labelElement = await item.findElement(By.css('span.entryItemContent'));
            const labelParts = ((await this.driver.executeScript(
                "return arguments[0].textContent;", labelElement
            )) as string).split(':');

            const key = labelParts[0]?.trim();
            const value = labelParts[1]?.trim() || null;

            switch (key) {
                case 'Beds': info.bedrooms = value; break;
                case 'Baths': info.bathrooms = value; break;
                case 'Total Sq. Ft.': info.totalSqft = value; break;
                case 'Lot Size': info.lotSqft = value; break;
                case 'Year Built': info.yearBuilt = value; break;
            }
        }

        return info;
    }

    private async findAdvancedInfo(sectionTitle: string): Promise<Record<string, any>> {
        const info: Record<string, any> = {};

        const xpath = `//h3[div[contains(., '${sectionTitle}')]]/ancestor::div[contains(@class, 'ExpandableAmenitiesInfoRow')]`;
        const section = await this.waitElement(By.xpath(xpath), 10000);
        if (!section) return info;

        const items = await section.findElements(By.css('li.entryItem'));

        for (const item of items) {
            const labelElement = await item.findElement(By.css('span.entryItemContent'));
            const labelParts = ((await this.driver.executeScript(
                "return arguments[0].textContent;", labelElement
            )) as string).split(':');

            const key = labelParts[0]?.trim();
            const value = labelParts[1]?.trim() || 'true';

            if (key) info[key] = value;
        }

        return info;
    }

    private async findPropertyType(): Promise<string | null> {
        const items = await this.driver.findElements(By.css('div.keyDetails-value'));
        for (const item of items) {
            const valueTypeElement = await item.findElement(By.css('span.valueType'));
            const typeText = await valueTypeElement.getText();

            if (typeText === 'Property Type') {
                const valueElement = await item.findElement(By.css('span.valueText'));
                return await valueElement.getText();
            }
        }
        return null;
    }

    private async getAllImage(): Promise<string[]> {
        const dialog = await this.waitElement(By.css('div.DialogWrapper'), 10000);
        if (!dialog) return [];

        const imgs = await dialog.findElements(By.css('img.img-card'));
        const urls = imgs.map((img) => img.getAttribute('src'));

        return await Promise.all(urls);
    }
}
