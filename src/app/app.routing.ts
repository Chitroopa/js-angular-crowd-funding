import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartAProjectComponent } from './start-a-project/start-a-project.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProjectDetailComponent } from './project-detail/project-detail.component'
import { ProjectFundComponent } from './project-fund/project-fund.component'
import { ProjectEditComponent } from './project-edit/project-edit.component'
import { AdminComponent }   from './admin/admin.component';

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
  },
  {
    path: 'project-edit/:id',
    component: ProjectEditComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
