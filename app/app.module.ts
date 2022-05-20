import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EmployeesNewComponent } from './components/employees/employees-new/employees-new.component';
import { EmployeesUpdateComponent } from './components/employees/employees-update/employees-update.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';
import { RolesNewComponent } from './components/roles/roles-new/roles-new.component';
import { RolesUpdateComponent } from './components/roles/roles-update/roles-update.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamsNewComponent } from './components/teams/teams-new/teams-new.component';
import { TeamsUpdateComponent } from './components/teams/teams-update/teams-update.component';

const appRoutes:Routes=[
  {path:'', component:EmployeesListComponent},
  {path:'new', component:EmployeesNewComponent},
  {path:'update/:id', component:EmployeesUpdateComponent},
  {path:'login', component:LoginComponent},
  {path:'roles', component:RolesListComponent},
  {path:'roles/new', component:RolesNewComponent},
  {path:'roles/update/:id', component:RolesUpdateComponent},
  {path:'teams', component:TeamsListComponent},
  {path:'teams/new', component:TeamsNewComponent},
  {path:'teams/update/:id', component:TeamsUpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeesNewComponent,
    EmployeesUpdateComponent,
    LoginComponent,
    NavigationComponent,
    ProfileComponent,
    RolesListComponent,
    RolesNewComponent,
    RolesUpdateComponent,
    TeamsListComponent,
    TeamsNewComponent,
    TeamsUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
