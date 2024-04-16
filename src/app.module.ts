import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './test.consumer';
import { DemoModule } from './demo/demo.module';
import { DdModule } from './dd/dd.module';

@Module({
  imports: [KafkaModule, DemoModule, DdModule],
  controllers: [AppController],
  providers: [AppService, TestConsumer],
})
export class AppModule {}
