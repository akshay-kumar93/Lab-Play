import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  quizUrl ="https://localhost:44391/api/QuizTest";

  constructor(private http:HttpClient) {  }
  getAllQuiz(id:number,response:any){
    return this.http.put<any>(`${this.quizUrl}/All-Question?id=${id}`,response);
  }
  getAllQuestion(){
    return this.http.get<any>(`${this.quizUrl}/All`);
  }
  getOneQuestion(id:number){
    return this.http.get<any>(`${this.quizUrl}/getOneQuestion?id=${id}`);
  }
}
