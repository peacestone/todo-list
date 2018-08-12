import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    'Task 1',
    'Task 2',
    'Task 3',
  ]
;



itemSelected(item: string) {
  console.log("Selected Item", item);
  }
}
  


