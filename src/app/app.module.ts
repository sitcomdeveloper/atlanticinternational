import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { SaitiComponent } from './index/saiti/saiti.component';
import { ServiceComponent } from './index/service/service.component';
import { PolicyComponent } from './index/policy/policy.component';
import { CustomerComponent } from './index/customer/customer.component';
import { AchievementComponent } from './index/achievement/achievement.component';
import { ContactComponent } from './index/contact/contact.component';
import { AboutusComponent} from './index/aboutus/aboutus.component';
import { DashComponent } from './dash/dash.component';
import { AheaderComponent } from './dash/aheader/aheader.component';
import { AfooterComponent } from './dash/afooter/afooter.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { DefaultComponent } from './dash/default/default.component';
import { AsaitiComponent } from './dash/asaiti/asaiti.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SaitiComponent,
    ServiceComponent,
    PolicyComponent,
    CustomerComponent,
    AchievementComponent,
    ContactComponent,
    AboutusComponent,
    DashComponent,
    AheaderComponent,
    AfooterComponent,
    SidebarComponent,
    DefaultComponent,
    AsaitiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule, FormsModule, ReactiveFormsModule, HttpClientModule
    // LoadingBarRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
