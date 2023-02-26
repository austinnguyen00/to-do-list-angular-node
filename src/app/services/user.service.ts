import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient, public auth: AuthService) { }

  getUsers(): Observable<User[]> {
    // Retrieve all users in our application
    return this.http.get<User[]>(this.apiUrl);
  }

  getCurrentUser(): Observable<any> {
    // auth.user$ return an observable where we can subscribe to
    // and retrieve current authenticated user information
    return this.auth.user$;
  }
}
