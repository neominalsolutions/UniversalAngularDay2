import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css'],
})
export class HookChildComponent implements DoCheck, OnInit, OnDestroy {
  counter: number = 0;
  interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('counter', this.counter);
      this.counter++;
    }, 1000);
  }
  // sayfa açıldıktan sonra Hook Component Parent Compoennt üzerinden HookChild Component clear methodunu tetikleme işlemi yapacağız

  ngDoCheck(): void {
    console.log('child-do-check');
  }

  clear() {
    alert('clear');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    // rxjs unsubscribe işlemleri
  }
}
