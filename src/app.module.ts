import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './test.consumer';
import { DemoModule } from './demo/demo.module';
import { DdService } from './dd.service';

@Module({
  imports: [KafkaModule, DemoModule],
  controllers: [AppController],
  providers: [AppService, TestConsumer, DdService],
})
export class AppModule {}
