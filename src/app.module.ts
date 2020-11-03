import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { ArticlesModule } from './articles/articles.module';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { HealthController } from './health/health.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME),
    TasksModule,
    ArticlesModule,
    TerminusModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
