import { Injectable } from '@angular/core';
import { DUMMY_TASKS, NewTask, TASK } from '../shared/Utility/dummy.data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskLists: TASK[] = DUMMY_TASKS;

  getSelectedUserTask(userId: string) {
    return  this.taskLists.filter((task) => task.userId === userId);
  }

  onCompleteTask(id: string) {
    const filterdLists = this.taskLists.filter((task) => task.id != id);
    this.taskLists = [...filterdLists]
  }

  onNewTaskAdd(data: NewTask, userId: string) {
    this.taskLists.push({
      ...data,
      id: Date.now().toString(),
      userId,
    })
  }
}
