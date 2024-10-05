import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent {
  values: string[] = ['apple', 'banana', 'carrot', 'date'];

  numbers: number[] = [1, 2, 34, 5, 6, 77, 55];
}
