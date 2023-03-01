import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [QuotesService],
  controllers: [QuotesController],
  imports: [],
})
export class QuotesModule {}
