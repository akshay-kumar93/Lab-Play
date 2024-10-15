import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
  id:number =1;
  allQuestion:any;
  newObj:{attempted:boolean,touched:boolean}={attempted: false,touched: false}
  constructor(private ser:ExamService) { }
  pre(){
    if(this.id>0){
      this.id = this.id-1
    }
    else this.id =1
    this.quizMethod();
  }
  next(){
    if(this.id<=5){
    this.id = this.id+1
    this.newObj.attempted=false,
    this.newObj.touched=true
  }
  else this.id =5
  this.quizMethod();
  }
  ngOnInit(): void {
    this.quizMethod();
  }

   quizMethod(){
    this.ser.getAllQuiz(this.id,this.newObj).subscribe(
      res=>{
        this.allQuestion =res
      },
      error=>console.log(error)
    )
  }

  saveContinue(){
    if(this.id<=5){
      this.id = this.id+1
      this.newObj.attempted=true,
      this.newObj.touched=true
    }
    else this.id =5
    this.quizMethod();
  }
}

