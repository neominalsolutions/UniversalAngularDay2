import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  ngOnInit(): void {
    const promise1 = new Promise((resolve, reject) => {
      // resolve('ali');
      // reject('hata');

      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });

    const promise2 = new Promise((resolve, reject) => {
      // 1sn beklet işlem yap
      return setTimeout(() => {
        resolve('promise2');
        // reject('p2 error');
      }, 1000);
    });

    const value = 'ali';
    console.log('value', value);

    // asenkron olan bir kodu sıralı çalıştırmak için
    promise2.then((data) => {
      console.log('p2', data);
      promise1.then((data) => {
        console.log('p1', data);
      });
    });

    promise1
      .then((data) => {
        // resolve durumunu yakaldığımız yer
        console.log('data:', data);
      })
      .catch((err) => {
        // reject durumunu yakaladığımız yer
        console.log('êrr', err);
      })
      .finally(() => {
        // reject resolve olsun olmasın yakaldığımız yer
        console.log('işlem sonlandı');
      });

    const promise3 = Promise.all([promise1, promise2]);

    promise3.then((data) => {
      console.log('p3', data); // aynı anda response döner
    });

    // ES7 async await eğer birbirini bekleyen bir iş durumu varsa mantıklı promise ile çalışır

    (async () => {
      try {
        let r1 = await promise1;
        console.log('r1', r1);
        let c = 'can';
        console.log('c', c);
        let r2 = await promise2; // bunlardan bir reject olursa catch hatayı yakalasın
        console.log('r2', r2);
      } catch (error) {
        console.log('async-err', error);
      } finally {
        console.log('async-bitti');
      }
    })();
  }
}
