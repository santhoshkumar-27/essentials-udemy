import { Component, Input } from '@angular/core';
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
