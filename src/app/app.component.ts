import { Component } from '@angular/core';
import { DUMMY_USERS, USER } from './shared/Utility/dummy.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: USER[] = DUMMY_USERS;
  selectedUserId!: string;
  title = 'essentials';

  get selectedUser() {
    const user = this.users.find((user) => user.id === this.selectedUserId);
    return user
  }

  onSelectItem(id: string) {
    this.selectedUserId = id;
  }
}
