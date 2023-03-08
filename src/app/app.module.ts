import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookChildComponent } from './hooks/hook-child/hook-child.component';
import { ApiLogger, ConsoleLogger, LoggerKey } from './providers/Ilogger';
import { ProviderTestComponent } from './providers/provider-test/provider-test.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HookChildComponent,
    ProviderTestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LoggerKey,
      useClass: ApiLogger,
    },
    {
      provide: 'apiKey',
      useValue: environment.apiKey,
    },
    {
      provide: 'loggerType',
      useFactory: (apiKey: string) => {
        console.log('kyyy', apiKey);

        if (apiKey.startsWith('w')) return new ConsoleLogger();
        else return new ApiLogger();
      },
      deps: ['apiKey'],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
