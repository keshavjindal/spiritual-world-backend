/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {

    async getSaints(){
        const data = await this.saints.findMany()
        return data
    }

    async getQuotes(){
        const data = await this.quotes.findMany()
        return data
    }

}
