import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  template: `
    <button class="button__logout" (click)="handleLogout()">Log Out</button>
  `,
})
export class LogoutButtonComponent {
  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  handleLogout(): void {
    // When using logout() method, Auth0 Angular SDK clears the application session
    // and redirects to the Auth0 /v2/logout endpoint to clear the Auth0 session under the hood
    // Pass the logoutParams.returnTo option to specify the URL 
    // where Auth0 should redirect your users after they log out
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}