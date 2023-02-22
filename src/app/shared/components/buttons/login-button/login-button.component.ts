import { Component } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: `
    <button mat-raised-button class="button__login" (click)="handleLogin()">Log In</button>
  `,
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent {
  constructor(private auth: AuthService) { }

  handleLogin(): void {
    // A method exposed by AuthService that performs a redirect to the Auth0 /authorize endpoint 
    // to kickstart the authentication process
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
    });
  }
}