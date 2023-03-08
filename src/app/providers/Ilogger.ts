import { InjectionToken } from '@angular/core';

export const LoggerKey = new InjectionToken<ILogger>('logger');

export interface ILogger {
  log(message: string): void;
}

export class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log('console', message);
  }
}

export class ApiLogger implements ILogger {
  log(message: string): void {
    console.log('api', message);
  }
}
