import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../shared/Utility/dummy.data';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() dialogClose = new EventEmitter();
  // @Output() add = new EventEmitter<NewTask>();
  private taskService = inject(TaskService);

  title = signal('');
  summary = signal('');
  date = signal('');

  onClose() {
    this.dialogClose.emit()
  }

  onSubmitForm() {
    this.taskService.onNewTaskAdd({
      dueDate: this.date(),
      summary: this.summary(),
      title: this.title()
    }, this.userId);

    this.onClose()
  }
}
