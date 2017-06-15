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

  submitForm(newProjectName: string,newImageUrl:string, newDescription: string,newFundGoal: string,newRiskAndChallenges: string) {
    var newFundGoalFormat: number = parseInt(newFundGoal);
    var newProject: Project = new Project(newProjectName, newImageUrl,newDescription, newFundGoalFormat, newRiskAndChallenges);
    this.projectService.addProject(newProject);
  }
}
