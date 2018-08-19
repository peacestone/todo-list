import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TaskServiceProvider} from '../../providers/task-service/task-service'
/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  content : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private taskServiceProvider : TaskServiceProvider) {

  this.content = ''
  this.notes = navParams.get('notes');
  this.id = navParams.get('id');
  this.description = navParams.get('content');
  this.dueDate = navParams.get('dueDate');
  this.email = navParams.get('email');

}

  ionViewDidLoad() {
  }

  postNote() : void {
     this.taskServiceProvider.createNote({content: this.content, task_id: this.id})
    .subscribe((data ) => {
      this.content = ''
      this.notes.unshift(JSON.parse(data))})
  }

  id : string;
  description : string;
  dueDate : string ;
  email : string ;
  notes : Array<any>;
  // notes: Array<{timeAgo: string, content: string}>


}
