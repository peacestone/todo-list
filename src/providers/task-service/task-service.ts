import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError, map, tap } from 'rxjs/operators'
import 'rxjs/add/operator/catch';


/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const rootApiUrl = 'https://cool-todo-list.herokuapp.com/';

@Injectable(
)
export class TaskServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TaskServiceProvider Provider');
  }


  getTasks(){
    return this.http.get(`${rootApiUrl}/api/tasks`)
    .do((res: Response) => {console.log(res)})
    // .map((res : Response ) => res

  }

  postTask(task){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    
    return this.http.post(`${rootApiUrl}/api/tasks` ,task, httpOptions)
  }

  createNote(note){
    
    return this.http.post(`${rootApiUrl}/api/tasks/${note.task_id}/notes`, note, {responseType: 'text'})
  }

  fetchNotes(taskId, pageNumber){
    return this.http.get(`${rootApiUrl}/api/tasks/${taskId}/notes?page=${pageNumber}`)
  }



}
