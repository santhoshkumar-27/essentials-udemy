import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TASK } from '../shared/Utility/dummy.data';
import { CardComponent } from "../shared/components/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
