import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonType = 'button' | 'menu' | 'reset' | 'submit';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() title!: string;
  @Output() OnClick = new EventEmitter<void>();


  onClick(): void {
    this.OnClick.emit();
  }

}
