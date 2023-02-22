import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SignupButtonComponent } from './shared/components/buttons/signup-button/signup-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginButtonComponent } from './shared/components/buttons/login-button/login-button.component';
import { LogoutButtonComponent } from './shared/components/buttons/logout-button/logout-button.component';
import { NavBarButtonsComponent } from './shared/components/navigation/nav-bar-buttons/nav-bar-buttons.component';
import { NavBarComponent } from './shared/components/navigation/nav-bar/nav-bar.component';

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
    NavBarComponent
  ],
  imports: [
    BrowserModule,
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
