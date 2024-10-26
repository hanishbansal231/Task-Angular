import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseComponents } from '@core/components/base.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent extends BaseComponents {
  @Input() tasks:string[] = [];

  onDelete(index:number):void{
    console.log(index);
  }
  onEdit(index:number):void{
    console.log(index);
  }
}
