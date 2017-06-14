import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-start-a-project',
  templateUrl: './start-a-project.component.html',
  styleUrls: ['./start-a-project.component.css'],
  providers: [ProjectService]
})
export class StartAProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() { }

  submitForm(newProjectName: string,newImageUrl:string, newDescription: string,newFundGoal: number,newRiskAndChallenges: string) {
    var newProject: Project = new Project(newProjectName, newImageUrl,newDescription, newFundGoal, newRiskAndChallenges);
    this.projectService.addProject(newProject);
  }
}
