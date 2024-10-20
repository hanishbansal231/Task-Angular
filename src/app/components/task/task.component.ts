import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { ErrorModel } from '../../shared/Interfaces/common.interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  taskErrors: ErrorModel = {
    required: 'Task is required',
    minLength: 'Task must be at least 5 characters long',
    pattern: 'Invalid task format',
  };

  onInput(task: string | null): void {
    console.log(task);
  }
}
