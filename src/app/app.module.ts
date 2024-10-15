import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LabRoomComponent } from './lab-room/lab-room.component';
import { DashboardComponent } from './quiz/dashboard/dashboard.component';
import { ExamPageComponent } from './quiz/exam-page/exam-page.component';
import { ResultPageComponent } from './quiz/result-page/result-page.component';
import { ExamHomeComponent } from './quiz/exam-home/exam-home.component';
import { DetailPageComponent } from './quiz/detail-page/detail-page.component';
import { SideBarComponent } from './quiz/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LabRoomComponent,
    DashboardComponent,
    ExamPageComponent,
    ResultPageComponent,
    ExamHomeComponent,
    DetailPageComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
