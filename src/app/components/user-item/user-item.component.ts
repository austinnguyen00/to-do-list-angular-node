import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/User'

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @Input() user: User;

}
