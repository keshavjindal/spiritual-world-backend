/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuotesService {
    
    constructor(private databaseService: DatabaseService){}

    async getQuotesBySaintName(saint:string, count:number){
        return await this.databaseService.getQuotes()
    }
}
