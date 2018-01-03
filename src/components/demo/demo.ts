import { Component } from '@angular/core';

/**
 * Generated class for the DemoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'demo',
  templateUrl: 'demo.html'
})
export class DemoComponent {

  text: string;

  constructor() {
    console.log('Hello DemoComponent Component');
    this.text = 'Hello World';
  }

}
