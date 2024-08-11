import { Component, computed, Input, input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) avator!: string;
  @Input({required: true}) name!: string;

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
  }
}
