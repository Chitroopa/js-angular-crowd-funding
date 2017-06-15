import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-fund',
  templateUrl: './project-fund.component.html',
  styleUrls: ['./project-fund.component.css'],
  providers: [ProjectService]
})
export class ProjectFundComponent implements OnInit {

  projectId: string;
  projectToFund;

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
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToFund = dataLastEmittedFromObserver;
    })
  }

  submitFund(newName: string, newEmail: string, newAmount: string){
    var amountRaised = parseInt(this.projectToFund.fundRaised) + parseInt(newAmount);
    var backersCount = parseInt(this.projectToFund.backers) + 1;
    this.projectService.updateProjectFund(this.projectId, amountRaised, backersCount);
    this.router.navigate(['projects', this.projectId]);
  }

}
