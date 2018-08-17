import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import {TaskServiceProvider} from '../../providers/task-service/task-service'
import {TaskPage} from '../task/task';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  tasksList : any = []
  constructor(public navCtrl: NavController, private taskServiceProvider : TaskServiceProvider) { }

  ngOnInit(){
    this.getTasks()
  }

;
 getTasks(): void {
   this.taskServiceProvider.getTasks()
    .subscribe((data) =>  {
      this.tasksList = data
   })
 }



itemSelected(item: string) {
    this.navCtrl.push(NewTaskPage);
  } 

taskSelected(task: string){
  console.log(task)
  this.navCtrl.push(TaskPage, task);

}
}
  


