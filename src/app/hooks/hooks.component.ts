import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { HookChildComponent } from './hook-child/hook-child.component';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data!: any[];
  // decorator ile html reflere erişebiliriz.
  @ContentChild('content') content!: ElementRef;
  @ViewChild('child', { static: true }) child!: HookChildComponent;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'ngOnChanges: Componente gönderilen Inputların bir önceki değeri ile bir sonraki değeri arasında fark varsa otomatik tetiklenir. Bir önceki değer ve şuanki değeri yakalamamıza olanak verir.',
      changes
    );
  }

  ngOnInit(): void {
    console.log(
      'ngOnInit:ngOnInit doma girerken ngOnChanges sonrası ilk tetiklenen method 1 kez çalışır API call işlemleri burada yapılır. Async bir çalışma prensibine sahipitir.',
      this.content,
      this.child
    );

    // this.child.clear();
  }

  ngDoCheck(): void {
    console.log(
      'ngDoCheck:componentte bir property değişimi veya bir eventin tetiklenmesi veya componentin doma ilk girmesi gibi bütün durumlarda çalışır. Dirty Check mekanizması için vardır. Burada logic geliştirme yapmayı önermeyiz.'
    );
  }

  ngAfterContentInit(): void {
    console.log(
      'ngAfterContentInit:ng-content ile işaretlenmiş contentin doma basıldığı ilk an. Burada content referansına erişebiliriz.',

      this.content
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      'ngAfterContentChecked:content init sonrası dirty check mekanizması için çalışır. Component üzerinde ki her bir state değişimi event ile tetiklenme durumları ng-content ile gönderilen content değişimi bu eventin çalışmasına sebep olur. Kullanımını önermiyoruz.'
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit:component içerisinde child component ref varsa onun ilk doma basıldığı anda çalışan hook. Daha öncesinde child component ref undefinedtır',
      this.child
    );
    this.child.clear();
  }

  ngAfterViewChecked(): void {
    console.log(
      'ngAfterViewChecked: child component içerisinde bir değişim, component içerisinde event çağrılması state değişimi durumlardından etkilenir. Kullanımı önerilmez'
    );
  }

  ngOnDestroy(): void {
    console.log(
      'ngOnDestroy:component domdan çıkarken çalışır ve subscription işlemlerinin unsubcribe edilmesini burada yapmalıyız.*ngIf ile domadan component çıkışında tetiklenir.'
    );
  }

  onClick() {
    alert('click me');
  }
}
