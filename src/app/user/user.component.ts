import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../shared/Utility/dummy.data'
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[0]);
  imagePath = computed(() => `users/${this.selectedUser().avatar}`);
  /**
   * Resolving template complex handling 
   * using in class
   */
  // get imagePath() {
  //   return `users/${this.selectedUser().avatar}`
  // }

  onSelectedUser() {
    console.log('this user is selected', this.selectedUser);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
