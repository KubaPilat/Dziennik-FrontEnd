import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {PlanComponent} from './plan/plan.component';
import {ClassComponent} from './class/class.component';
import {GradesComponent} from './grades/grades.component';
import {TeachersComponent} from './teachers/teachers.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'class', component: ClassComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [StudentsComponent, MainComponent, LoginComponent, PlanComponent, ClassComponent, GradesComponent, TeachersComponent];
