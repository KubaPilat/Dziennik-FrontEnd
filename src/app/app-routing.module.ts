import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {PlanComponent} from './plan/plan.component';
import {ClassComponent} from './class/class.component';
import {GradesComponent} from './grades/grades.component';
import {TeachersComponent} from './teachers/teachers.component';
import {MessageComponent} from './message/message.component';
import {CalendarComponent} from './calendar/calendar.component';
import {helpToCalendar} from './helpToCalendar/demo.component';
import {SendComponent} from './send/send.component';
import {NoticeComponent} from './notice/notice.component';
import {SendNoticeComponent} from './send-notice/send-notice.component';
import {Plan1aComponent} from './plan1a/plan1a.component';
import {GradesDetailComponent} from './grades-detail/grades-detail.component';


const routes: Routes = [
  {path: 'stronaGlowna', component: MainComponent},
  {path: 'uczniowie', component: StudentsComponent},
  {path: 'logowanie', component: LoginComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'klasy', component: ClassComponent},
  {path: 'oceny', component: GradesComponent},
  {path: 'nauczyciele', component: TeachersComponent},
  {path: 'wiadomosci', component: SendComponent},
  {path: 'Wiadomosci', component: MessageComponent},
  {path: 'kalendarz', component: CalendarComponent},
  {path: 'ogloszenia', component: SendNoticeComponent},
  {path: 'Ogloszenia', component: NoticeComponent},
  {path: 'plann', component: Plan1aComponent},
  {path: 'ocenyy', component: GradesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//zaimportowałem ją w app.module w 3 klinijce
export const RoutingComponent = [StudentsComponent, MainComponent, LoginComponent, PlanComponent, ClassComponent,
  GradesComponent, TeachersComponent, MessageComponent, CalendarComponent, SendComponent, NoticeComponent,
  helpToCalendar, SendNoticeComponent, Plan1aComponent, GradesDetailComponent];
