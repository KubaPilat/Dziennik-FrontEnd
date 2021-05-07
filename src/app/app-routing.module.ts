import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SudentsComponent} from './sudents/sudents.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {PlanComponent} from './plan/plan.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'sudents', component: SudentsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'plan', component: PlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [SudentsComponent, MainComponent];
