import { Injectable } from '@angular/core';
import { DUMMY_TASKS, NewTask, TASK } from '../shared/Utility/dummy.data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskLists: TASK[] = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.taskLists = JSON.parse(tasks);
    }

  }

  getSelectedUserTask(userId: string) {
    return  this.taskLists.filter((task) => task.userId === userId);
  }

  onCompleteTask(id: string) {
    const filterdLists = this.taskLists.filter((task) => task.id != id);
    this.taskLists = [...filterdLists];
    this.saveTasksInLocalStorage();
  }

  onNewTaskAdd(data: NewTask, userId: string) {
    this.taskLists.push({
      ...data,
      id: Date.now().toString(),
      userId,
    })
    this.saveTasksInLocalStorage();
  }

  private saveTasksInLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskLists))
  }
}
