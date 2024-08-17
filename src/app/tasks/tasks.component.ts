import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS, NewTask, TASK, USER } from '../shared/Utility/dummy.data';
import { NewTaskComponent } from "../new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) user!: USER;
  isAddingNewTask = false;
  taskLists: TASK[] = DUMMY_TASKS;

  get tasks(): TASK[] {
    console.log('this is task lists')
    return this.user ? this.taskLists.filter((task) => task.userId === this.user.id): [];
  }

  onCompleteTask(id: string) {
    const filterdLists = this.taskLists.filter((task) => task.id != id);
    this.taskLists = [...filterdLists]
  }

  onAddingNewTask() {
    this.isAddingNewTask = true;
  }

  onCloseDialog() {
    this.isAddingNewTask = false;
  }

  onNewTaskAdd(data: NewTask) {
    this.taskLists.push({
      ...data,
      id: Date.now().toString(),
      userId: this.user.id
    })
  }
}
