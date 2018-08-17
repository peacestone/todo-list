import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewTaskPage} from '../pages/new-task/new-task';
import {TaskPage} from '../pages/task/task';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { TaskServiceProvider } from '../providers/task-service/task-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewTaskPage,
    TaskPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewTaskPage,
    TaskPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskServiceProvider,
    HttpClientModule
  ]
})
export class AppModule {}
