import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS, USER } from './shared/Utility/dummy.data';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
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
