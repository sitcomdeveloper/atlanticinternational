import { NgModule, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './index/contact/contact.component';
import { CustomerComponent } from './index/customer/customer.component';
import { PolicyComponent } from './index/policy/policy.component';
import { SaitiComponent } from './index/saiti/saiti.component';
import { ServiceComponent } from './index/service/service.component';
import { AchievementComponent } from './index/achievement/achievement.component'
import { AboutusComponent } from './index/aboutus/aboutus.component';
import { DashComponent } from './dash/dash.component';
import { DefaultComponent } from './dash/default/default.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component:IndexComponent,
  children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'customer', component:CustomerComponent},
    {path:'policy', component:PolicyComponent},
    {path:'saiti', component:SaitiComponent},
    {path:'service', component:ServiceComponent},
    {path:'achievement', component:AchievementComponent},
    {path:'aboutus', component:AboutusComponent}
  ]},
  {path:'login', component:LoginComponent},
  {path:'admin', component:DashComponent,
  children:[
    {path:'', redirectTo:'default', pathMatch:'full'},
    {path:'default', component:DefaultComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
