import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from 'src/Module/userform.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { devConfig } from './Config/database.config';


@Module({
  imports: [TypeOrmModule.forRoot(devConfig),TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
