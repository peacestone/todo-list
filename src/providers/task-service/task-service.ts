import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable(
)
export class TaskServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TaskServiceProvider Provider');
  }

  getTasks(){
    return this.http.get('http://localhost:8000/api/tasks')
    .do((res: Response) => {console.log(res)})
    // .map((res : Response ) => res

  }

}
