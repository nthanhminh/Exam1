import { Builder, By, until, Key } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export const ScrapeProvider = {
    provide: 'DRIVER_PROVIDER',
    useFactory: async() => {
        const options = new chrome.Options();
        const user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';       
        
        options.addArguments('--headless=new');
        options.addArguments('--start-maximized');
        options.addArguments('--incognito');
        options.addArguments(`--user-agent=${user_agent}`);
        options.addArguments('--disable-blink-features=AutomationControlled');
        options.addArguments('--disable-infobars');
        options.addArguments('--disable-extensions');
        options.addArguments('--disable-notifications');
        options.addArguments('--ignore-certificate-errors');
        options.addArguments('--ignore-ssl-errors=yes');
        options.addArguments('--allow-insecure-localhost');
        options.addArguments('--ssl-version-max=tls1.3');
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--disable-gpu');


        options.excludeSwitches('enable-automation', 'enable-logging');

        options.setUserPreferences({
            'credentials_enable_service': false,
            'profile.password_manager_enabled': false,
            'profile.default_content_setting_values.notifications': 2
        });

        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        return driver;
    }
}
