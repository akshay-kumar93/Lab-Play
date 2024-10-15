import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-room',
  templateUrl: './lab-room.component.html',
  styleUrls: ['./lab-room.component.css'],
})
export class LabRoomComponent implements OnInit {
  cuts: boolean = true;
  bntStyle: string = '';
  drop:boolean = false;
  result:boolean = false;
  constructor() {}
  ngOnInit(): void {
  }
  // submit() {
  //   this.onKnifeSlideEnd();
  //   this.bntStyle = 'knife';
  // }
  onKnifeSlideEnd = () => {
    this.bntStyle = 'knife';
    setTimeout(() => {
      this.cuts = false;
    }, 2000);
  };

  dropper(){
    this.drop = true
    setTimeout(() => {
      this.result =true
      this.drop = false
    }, 2000);
  }

}
