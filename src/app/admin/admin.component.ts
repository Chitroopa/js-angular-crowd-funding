import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
