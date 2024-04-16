import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DemoService } from './demo.provider';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly demoService: DemoService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('demo')
  getDemo() {
    return this.demoService.getDemo();
  }
}
