import { Injectable } from '@angular/core';
import { Project} from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete);
    projectEntryInFirebase.remove();
  }

  updateProjectFund(projectId: string, amountRaised: number, backersCount: number) {
    console.log(projectId);
    var projectEntryInFirebase = this.getProjectById(projectId);
    projectEntryInFirebase.update({fundRaised: amountRaised,
                                    backers: backersCount});
  }
}
