import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  sh: any;
  isChecked: boolean;
  ToDO: boolean;
  SM: boolean;
  constructor() { }

  ngOnInit(): void {
    this.sh = 1
    this.ToDO = true;
  }

  ProjectList(event) {
    if (event.target['name'] == 'ToDo'){
      this.ToDO = true;
      this.SM=false
    }
    else{
      this.SM=true
      this.ToDO = false;
    }
  }

}
