import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiLogger, ConsoleLogger, ILogger, LoggerKey } from '../Ilogger';

@Component({
  selector: 'app-provider-test',
  templateUrl: './provider-test.component.html',
  styleUrls: ['./provider-test.component.css'],
  providers: [{ provide: LoggerKey, useClass: ConsoleLogger }], // global provider yöntemini ezme işlemi ovveride işlemi
})
export class ProviderTestComponent implements OnInit {
  constructor(
    // private ll: Meta,
    // private title:TitleService
    @Inject(LoggerKey) private logger: ILogger,
    @Inject('apiKey') private key: string,
    @Inject('loggerType') private loggerType: any
  ) {}

  ngOnInit(): void {
    // console.log('ll', this.ll);
    this.logger.log('Provider Test init');

    console.log('key', this.key);
    console.log('loggerType', this.loggerType);
  }
  // constructor(private logger: ApiLogger) {}
  // ngOnInit(): void {
  //   this.logger.log('Provider Test İnit');
  // }
}
