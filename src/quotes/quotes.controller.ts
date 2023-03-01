/* eslint-disable prettier/prettier */
import { Controller, Get, Logger, Query, Res } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    
    private readonly logger = new Logger(QuotesController.name)

    constructor(private quotesService: QuotesService){ }

    @Get('name')
    async getQuotesBySaintName(@Query() query, @Res() res){
        try {
            const saint: string = query.saint
            const count: number = parseInt(query.count)
            
            if(query.saint === undefined){
                throw new Error("pass saint name as ?saint=")
            }
            if(query.count === undefined){
                throw new Error("pass count of quotes as ?count=")
            }
            if(Number.isNaN(count)){
                throw new Error("pass correct count")
            }
    
            const quotesData = await this.quotesService.getQuotesBySaintName(saint, count)
            return res.json({
                status: 200,
                data: {
                    saint,
                    quotes: quotesData
                }
            })

        } catch (error) {
            this.logger.error(error)
            return res.json({ status:400, message:'some error occured', error:error.message })
        }
    }
}
