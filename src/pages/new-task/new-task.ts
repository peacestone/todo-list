import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {TaskPage} from '../task/task';
import {TaskServiceProvider} from '../../providers/task-service/task-service'
import { AlertController } from 'ionic-angular';

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

  public description : string
  public dueDate : string
  public email :string
  // public task : {}
  constructor(public navCtrl: NavController, private alertCtrl : AlertController, public navParams: NavParams, private taskServiceProvider : TaskServiceProvider) {
    this.description = ''
    this.email = ''
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }

  cancelClicked() {
    this.navCtrl.push(HomePage);
  }

  addTaskClicked() : void {
    if(this.description){
    
    this.taskServiceProvider.postTask({dueDate: this.dueDate, email: this.email, content: this.description })
    .subscribe((data  ) => {
     this.navCtrl.push(TaskPage, data) },
   err=> console.log(err))
  }   else {
    const alert = this.alertCtrl.create({
      title: 'Task Description Cannot Be Empty!',
      buttons: ['Dismiss']
    })
    alert.present();
  }

  }
}