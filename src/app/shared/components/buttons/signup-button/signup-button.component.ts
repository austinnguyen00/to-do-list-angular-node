import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
    </ng-container>

    <ng-template #loggedOut>
      <button class="button__sign-up" (click)="handleSignUp()">Sign Up</button>
    </ng-template>
  `,
})
export class SignupButtonComponent {
  constructor(public auth: AuthService) { }

  handleSignUp(): void {
    // A method exposed by AuthService that performs a redirect to the Auth0 /authorize endpoint 
    // to kickstart the authentication process
    // Take user to sign-up page by specifying the screen_hint=signup property
    // in the authorizationParams configuration object of the loginWithRedirect() method
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }
}