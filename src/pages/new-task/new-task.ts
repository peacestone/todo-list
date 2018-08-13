import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {TaskPage} from '../task/task';


/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {
  showCalendar: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.showCalendar = false;

  }

  date: string;
  type: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }

  cancelClicked() {
    this.navCtrl.push(HomePage);
  }

  addTaskClicked() {
    this.navCtrl.push(TaskPage);
  }





}
