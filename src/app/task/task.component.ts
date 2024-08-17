import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASK } from '../shared/Utility/dummy.data';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task?: TASK;
  @Output() complete: EventEmitter<string> = new EventEmitter();

  onCompleteTask() {
    this.complete.emit(this.task?.id);
  }
}
