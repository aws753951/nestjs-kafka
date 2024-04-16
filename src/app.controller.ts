import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DemoService } from './demo/demo.provider';
import { DdService } from './dd/dd.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly demoService: DemoService,
    private readonly ddService: DdService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('demo')
  getDemo() {
    return this.demoService.getDemo();
  }

  @Get('dd')
  getDd() {
    return this.ddService.getDd();
  }
}
