import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {PlanComponent} from './plan/plan.component';
import {ClassComponent} from './class/class.component';
import {GradesComponent} from './grades/grades.component';
import {TeachersComponent} from './teachers/teachers.component';
import {MessageComponent} from './message/message.component';
import {DialogComponent} from './dialog/dialog.component';
import {CalendarComponent} from './calendar/calendar.component';
import {demoComponent} from './demo/demo.component';
import {SendMessageComponent} from './send-message/send-message.component';


const routes: Routes = [
  {path: 'stronaGlowna', component: MainComponent},
  {path: 'uczniowie', component: StudentsComponent},
  {path: 'logowanie', component: LoginComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'klasy', component: ClassComponent},
  {path: 'oceny', component: GradesComponent},
  {path: 'nauczyciele', component: TeachersComponent},
  {path: 'wiadomosci', component: MessageComponent},
  {path: 'kalendarz', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [StudentsComponent, MainComponent, LoginComponent, PlanComponent, ClassComponent,
  GradesComponent, TeachersComponent, MessageComponent, DialogComponent, CalendarComponent, demoComponent, SendMessageComponent];
