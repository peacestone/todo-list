import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import {TaskServiceProvider} from '../../providers/task-service/task-service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasksList = []
  constructor(public navCtrl: NavController, private taskServiceProvider : TaskServiceProvider) {
    this.getTasks()
  }

  // items = [
  //   'Task 1',
  //   'Task 2',
  //   'Task 3',
  // ]
;
 getTasks() {
   this.taskServiceProvider.getTasks().subscribe((data) =>  {
     this.tasksList = data
   })
 }



itemSelected(item: string) {
    this.navCtrl.push(NewTaskPage);
  } 

taskSelected(item: string){

}
}
  


