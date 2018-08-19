import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TaskServiceProvider} from '../../providers/task-service/task-service'
import { Camera } from '@ionic-native/camera';

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
  notesPageNumber : number;
  imageURL;

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskServiceProvider : TaskServiceProvider, private camera : Camera) {

  this.content = ''
  this.notes = navParams.get('notes');
  this.id = navParams.get('id');
  this.description = navParams.get('content');
  this.dueDate = navParams.get('dueDate');
  this.email = navParams.get('email');
  this.notesPageNumber = 2;
}

  ionViewDidLoad() {
  }

  postNote() : void {
     this.taskServiceProvider.createNote({content: this.content, task_id: this.id})
    .subscribe((data ) => {
      this.content = ''
      this.notes.unshift(JSON.parse(data))})
  }

  handleHistoryButtonClick() : void {

    this.taskServiceProvider.fetchNotes(this.id, this.notesPageNumber)
    .subscribe(((res : any) => {
      console.log(res, this)
      this.notes = this.notes.concat(res.data)
      this.notesPageNumber++
    }))
  }

  

  id : string;
  description : string;
  dueDate : string ;
  email : string ;
  notes : Array<any>;
  // notes: Array<{timeAgo: string, content: string}>

  takePhoto(){
    this.camera.getPicture().then((imageData) => {
       this.imageURL = imageData
       this.content = imageData
       this.postNote()

    }, (err) => {
       console.log(err);
    });
  }


}
