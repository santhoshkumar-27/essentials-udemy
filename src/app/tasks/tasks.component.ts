import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS, TASK, USER } from '../shared/Utility/dummy.data';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: USER;

  taskLists: TASK[] = DUMMY_TASKS;

  get tasks(): TASK[] {
    return this.user ? this.taskLists.filter((task) => task.userId === this.user.id): [];
  }
}
