import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Subscribe to the return observable from userService
    // to receive users data
    this.userService
      .getUsers()
      .subscribe(users => this.users = users);
    console.log(this.users);
  }
}
