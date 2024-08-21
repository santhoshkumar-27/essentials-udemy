import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TASK } from '../shared/Utility/dummy.data';
import { CardComponent } from "../shared/components/card/card.component";
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: TASK;
  // @Output() complete: EventEmitter<string> = new EventEmitter();

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.onCompleteTask(this.task.id);
  }
}
