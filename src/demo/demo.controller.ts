import { Controller, Get } from '@nestjs/common';
import { DemoService } from './demo.provider';

@Controller('demomodule')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}
  @Get()
  getDemo(): string {
    return this.demoService.getDemo();
  }
}
