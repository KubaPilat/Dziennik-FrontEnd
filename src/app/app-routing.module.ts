import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SudentsComponent} from './sudents/sudents.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'sudents', component: SudentsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [SudentsComponent, MainComponent];
