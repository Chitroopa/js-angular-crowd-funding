import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
  providers: [ProjectService]
})
export class ProjectEditComponent implements OnInit {

    projectId: string;
    projectToDelete;

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
    this.projectToDelete = this.projectService.getProjectById(this.projectId);
  }


  beginDeletingProject(){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.projectService.deleteProject(this.projectId);
    }
  }
}
