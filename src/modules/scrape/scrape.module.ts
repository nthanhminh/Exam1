import { Module } from "@nestjs/common";
import { ScrapeService } from "./scrape.service";
import { ScrapeProvider } from "./scrape.provider";
import { ScrapeController } from "./scrape.controller";

@Module({
    providers: [
        ScrapeProvider,
        ScrapeService
    ],
    controllers: [ScrapeController]
})
export class ScrapeModule{}
