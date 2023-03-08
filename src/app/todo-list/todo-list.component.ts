import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, map, Observable, of, Subscription, tap } from 'rxjs';
import { ITodo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todoSubscription!: Subscription;
  subs: Subscription[] = [];
  todoList!: ITodo[];
  todoList$!: Observable<ITodo[]>;

  constructor(private todoService: TodoService) {}

  loadData() {
    const s = this.todoService
      .getTodos()
      .pipe(
        // veri transform işlemlerini burada yapabiliriz
        tap((data) => {
          // loglama gibi audit işlemleri watch
          localStorage.setItem('todos', JSON.stringify(data));
        }),
        map((res: any) => {
          // döne
          const data = {
            data: res,
            success: true,
          };
          return data;
        }),
        catchError((err) => {
          // hata durumu arasına girdik.
          return of('Ne olursa olsun bu hatayı ver');
        })
      )
      .subscribe({
        next: (result: any) => {
          // resolve sinyali
          console.log('data1', result.data);
          this.todoList = [...result.data];
        },
        error: (err) => {
          //
          console.log('err', err);
        },
        complete: () => {
          console.log('işlem bitti');
          // s.unsubscribe();
        },
      });
  }

  ngOnInit(): void {
    const obs = of([1, 2, 3]);

    obs.subscribe((data) => console.log('data', data));

    this.todoList$ = this.todoService.getTodos();
    // property observable binding

    this.loadData();

    // const sub1 = this.todoService
    //   .getTodos()
    //   .pipe(
    //     // veri transform işlemlerini burada yapabiliriz
    //     tap((data) => {
    //       // loglama gibi audit işlemleri watch
    //       localStorage.setItem('todos', JSON.stringify(data));
    //     }),
    //     map((res) => {
    //       // döne
    //       const response = {
    //         data: res,
    //         success: true,
    //       };
    //       return response;
    //     }),
    //     catchError((err) => {
    //       // hata durumu arasına girdik.
    //       return of('Ne olursa olsun bu hatayı ver');
    //     })
    //   )
    //   .subscribe({
    //     next: (data) => {
    //       // resolve sinyali
    //       console.log('data', data);
    //     },
    //     error: (err) => {
    //       //
    //       console.log('err', err);
    //     },
    //     complete: () => {
    //       console.log('işlem bitti');
    //     },
    //   });

    // this.subs.push(sub1);
  }

  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe(); // DOMdan kalkarken Memory Leak olmaması için kaynağı temizle
    this.subs.map((subs) => {
      subs.unsubscribe();
    });
  }

  trackByFn(index: number) {
    console.log('trackby', index);
  }
}
