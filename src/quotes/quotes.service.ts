/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
    
    async getQuotesBySaintName(saint:string, count:number){
        return ['The river that flows in you also flows in me.']
    }
}
