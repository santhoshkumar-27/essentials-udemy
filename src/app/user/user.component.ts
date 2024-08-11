import { Component } from '@angular/core';

import { DUMMY_USERS } from '../shared/Utility/dummy.data'
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[0];

  /**
   * Resolving template complex handling 
   * using in class
   */
  get imagePath() {
    return `users/${this.selectedUser.avatar}`
  }

  onSelectedUser() {
    console.log('this user is selected', this.selectedUser);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
