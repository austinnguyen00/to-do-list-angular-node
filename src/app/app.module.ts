import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SignupButtonComponent } from './shared/components/buttons/signup-button/signup-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginButtonComponent } from './shared/components/buttons/login-button/login-button.component';
import { LogoutButtonComponent } from './shared/components/buttons/logout-button/logout-button.component';
import { NavBarButtonsComponent } from './shared/components/navigation/nav-bar-buttons/nav-bar-buttons.component';
import { NavBarComponent } from './shared/components/navigation/nav-bar/nav-bar.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    SignupButtonComponent,
    UserProfileComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    NavBarButtonsComponent,
    NavBarComponent,
    AdminComponent,
    HomeComponent,
    UsersComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,

    AuthModule.forRoot({
      domain: 'dev-ghfmxbn22dct1vdh.us.auth0.com',
      clientId: 'fNlrQdBvie6AMdo4UAE8W7KrLHy1cda9',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
