import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartAProjectComponent } from './start-a-project/start-a-project.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectDetailComponent } from './project-detail/project-detail.component'
import { ProjectFundComponent } from './project-fund/project-fund.component'

const appRoutes: Routes = [
  {
    path: 'start-a-project',
    component: StartAProjectComponent
  },
  {
    path:'',
    component: ProjectsComponent
  },
  {
    path:'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path:'projects/fund/:id',
    component: ProjectFundComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
