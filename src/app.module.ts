import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [QuotesModule, DatabaseModule],
})
export class AppModule {}
