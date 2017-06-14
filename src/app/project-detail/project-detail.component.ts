import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {

  projectId: string;
  projectToDisplay;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = (urlParameters['id']);
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

  backProject(){
   this.router.navigate(['projects/fund/', this.projectId]);
  }

  deleteProject(){
    this.router.navigate(['project-edit', this.projectId]);
  }
}
