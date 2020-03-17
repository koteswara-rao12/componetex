import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  section1;
  section2;
  section3;

  constructor() { }

  ngOnInit(): void {
    this.section1 = true;
  }

  selectSection(section){
    this.section2 = false;
    this.section1 = false;
    this.section3 = false;
    if(section == 'section1'){
      this.section1 = true;

    }else if(section == 'section2'){
      this.section2 = true;

    }else if(section == 'section3'){
      this.section3 = true;

    }

  }

}
