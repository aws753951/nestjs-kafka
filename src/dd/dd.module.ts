import { Module } from '@nestjs/common';
import { DdService } from './dd.service';

@Module({
  providers: [DdService],
  exports: [DdService],
})
export class DdModule {}
