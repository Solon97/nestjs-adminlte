import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('pages/index.hbs')
  root() {
    console.log('Teste');
    return { message: 'hello world!' };
  }

  @Get('example')
  @Render('pages/adminlte.hbs')
  rooteste() {
    console.log('Teste1');
    return { message: 'hello world!' };
  }
}
