import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) avator!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Output() select: EventEmitter<string> = new EventEmitter<string>()
  // select = output<string>()
  // avator = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() =>  this.avator() ? `users/${this.avator() }` : '')

  /**
   * Resolving template complex handling 
   * using in class
   */
  get imagePath() {
    return this.avator ? `users/${this.avator}` : '';
  }

  onSelectedUser() {
    this.select.emit(this.id)
  }
}
