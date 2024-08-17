import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { USER } from '../shared/Utility/dummy.data';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({ required: true }) avator!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  @Input({required: true}) user!: USER;
  @Input({required: true}) selectedUserId!: string;
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
    return this.user ? `users/${this.user.avatar}` : '';
  }

  onSelectedUser() {
    this.select.emit(this.user.id)
  }
  get activeSelectedUser() {
    return this.selectedUserId && this.user ? this.user.id === this.selectedUserId : false;
  }
}
