import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS, NewTask, TASK, USER } from '../../shared/Utility/dummy.data';
import { NewTaskComponent } from "../new-task/new-task.component";
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) user!: USER;
  isAddingNewTask = false;
  private taskService = inject(TaskService);

  get tasks(): TASK[] {
    return this.user ? this.taskService.getSelectedUserTask(this.user.id): [];
  }

  // onCompleteTask(id: string) {
  //   this.taskService.onCompleteTask(id);
  // }

  onAddingNewTask() {
    this.isAddingNewTask = true;
  }

  onCloseDialog() {
    this.isAddingNewTask = false;
  }

  // onNewTaskAdd(data: NewTask) {
  //   this.taskService.onNewTaskAdd(data, this.user.id)
  // }
}
