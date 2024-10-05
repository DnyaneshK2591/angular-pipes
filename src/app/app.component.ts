import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  price: number = 12345.6789;
  myString: string = 'This is a STRING in Mixed CASE';
  myNumber: number = 0.23;
  myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];
  myString2: string = 'This is a long string.';

  //date
  currentDate: Date = new Date();

  //object
  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };
  
  //asynchronous
  myObservable$: Observable<number> = of(42);
  myPromise$: Promise<string> = Promise.resolve('Hello World!');

}
