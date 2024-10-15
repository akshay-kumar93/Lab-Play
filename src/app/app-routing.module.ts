import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabRoomComponent } from './lab-room/lab-room.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './quiz/dashboard/dashboard.component';
import { ExamPageComponent } from './quiz/exam-page/exam-page.component';
import { ResultPageComponent } from './quiz/result-page/result-page.component';
import { ExamHomeComponent } from './quiz/exam-home/exam-home.component';
import { DetailPageComponent } from './quiz/detail-page/detail-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'lab-room',component:LabRoomComponent},
  {path:'exam-home',component:ExamHomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'exam',component:ExamPageComponent},
  {path:'reult',component:ResultPageComponent},
  {path:'detail',component:DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
