import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactInfoComponent} from './contact-info/contact-info.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "contact-info", component: ContactInfoComponent},
  {path: "404", component: NotfoundComponent},
  {path: "**", redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
