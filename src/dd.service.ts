import { Injectable } from '@nestjs/common';

@Injectable()
export class DdService {
  getDd(): string {
    return '屌爺';
  }
}
