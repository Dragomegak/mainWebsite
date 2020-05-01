import { Component, OnInit } from '@angular/core';
import projects from '../../assets/projectData/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public projectList:{
    name:string,
    link:string,
    description:string,
    workDescription:string,
    technologiesUsed:string,
  }[] = projects;

  ngOnInit(): void {
  }

}
