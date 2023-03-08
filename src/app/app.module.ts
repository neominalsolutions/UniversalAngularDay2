import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookChildComponent } from './hooks/hook-child/hook-child.component';
import { ApiLogger, ConsoleLogger, LoggerKey } from './providers/Ilogger';
import { ProviderTestComponent } from './providers/provider-test/provider-test.component';
import { environment } from 'src/environments/environment';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { PromisesComponent } from './promises/promises.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HookChildComponent,
    ProviderTestComponent,
    PromisesComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    // {
    //   provide: {
    //     // eğer servis  providedIn: 'root' olarak tanımlanmış ise buraya eklemeye gerek yok (singleton instance root düzeyinde çalışır.)
    //     TodoService, // type of
    //   },
    //   useClass: TodoService,
    // },
    {
      provide: LoggerKey, // InjectionToken ile
      useClass: ApiLogger, // singleton
    },
    {
      provide: 'apiKey', // string Key ile
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
