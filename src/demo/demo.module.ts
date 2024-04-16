import { Module } from '@nestjs/common';
import { DemoService } from './demo.provider';
import { DemoController } from './demo.controller';

@Module({
  controllers: [DemoController],
  providers: [DemoService],
  exports: [DemoService],
})
export class DemoModule {}
