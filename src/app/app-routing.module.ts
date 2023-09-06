import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:AppComponent
  },
  {
    path:"display",component:DisplayComponent
  },
  {
    path:"login",component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
