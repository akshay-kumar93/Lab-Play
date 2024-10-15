import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  allQuestions:any;
  constructor(private ser:ExamService,private route:Router) { }

  ngOnInit(): void {
    this.ser.getAllQuestion().subscribe(
      res=>this.allQuestions=res,
      err=>console.log(err)
    )
  }


  btn(id:number){

  }

}
