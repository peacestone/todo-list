import { Component ,ViewChild , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TaskServiceProvider} from '../../providers/task-service/task-service'
import { Camera } from '@ionic-native/camera';
import { Content } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
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

  @ViewChild(Content) contentContainer: Content;

  constructor(public navCtrl: NavController, private alertCtrl : AlertController, public navParams: NavParams, private taskServiceProvider : TaskServiceProvider, private camera : Camera) 
  {

  this.content = ''
  this.notes =  [];
  this.id = navParams.get('id');
  this.description = navParams.get('content');
  this.dueDate = navParams.get('dueDate');
  this.email = navParams.get('email');
  this.notesPageNumber = 1;
}

  ionViewDidLoad() {
    this.taskServiceProvider.fetchNotes(this.id, this.notesPageNumber)
    .subscribe((res : any) => {
      console.log('is page loading')
      this.notes = this.notes.concat(res.data)
      this.contentContainer.resize()
      this.notesPageNumber++
    })
  }

  handleTaskButtonClick() {
    this.navCtrl.push(HomePage)
  }


  postNote() : void {
      if (this.content){
      this.taskServiceProvider.createNote({content: this.content, task_id: this.id})
      .subscribe((data ) => {
        this.content = ''
        this.notes.unshift(JSON.parse(data))})
        this.contentContainer.resize()
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'Note Content Cannot Be Empty!',
          buttons: ['Dismiss']
        })
        alert.present();
      }
    }

  handleHistoryButtonClick() : void {

    this.taskServiceProvider.fetchNotes(this.id, this.notesPageNumber)
    .subscribe(((res : any) => {
      console.log(res, this)
      this.notes = this.notes.concat(res.data)
      this.contentContainer.resize()
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
       this.notes.unshift(imageData)
       this.postNote()

    }, (err) => {
       console.log(err);
    });
  }


}
