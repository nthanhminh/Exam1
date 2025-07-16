import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ScrapeService } from "./scrape.service";

@Controller('api')
@ApiTags('api')
export class ScrapeController {
    constructor(
        private readonly scrapeService: ScrapeService
    ) {}

    @Get('property-info')
    async getInfo(@Query('address') address: string) {
        return await this.scrapeService.getInformationOfAddress(address);
    }
}
