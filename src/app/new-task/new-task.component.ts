import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../shared/Utility/dummy.data';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() dialogClose = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>();
  title = signal('');
  summary = signal('');
  date = signal('');

  onClose() {
    this.dialogClose.emit()
  }

  onSubmitForm() {
    this.add.emit({
      dueDate: this.date(),
      summary: this.summary(),
      title: this.title()
    });

    this.onClose()
  }
}
