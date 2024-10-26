import { Component, OnInit } from '@angular/core';
import { LocalStorageKey, LocalStorageUtils } from '@core/services/localStorageUtils';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { TasksComponent } from '@shared/components/tasks/tasks.component';
import { ErrorModel } from '@shared/Interfaces/common.interface';
import { BaseComponents } from 'app/core/components/base.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [InputComponent, ButtonComponent,TasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent extends BaseComponents implements OnInit {


  taskErrors: ErrorModel = {
    required: 'Task is required',
    minLength: 'Task must be at least 5 characters long',
    pattern: 'Invalid task format',
  };

  task: string = '';
  tasks: string[] = [];

  constructor(localStorageUtils: LocalStorageUtils) {
    super(localStorageUtils);
  }

  ngOnInit(): void {
   const information = this.localStorageUtils?.getInfomation<string[]>(LocalStorageKey.TASK);
  // const information = JSON.parse((localStorage.getItem(LocalStorageKey.TASK)) as any);
   if(information){
    this.tasks = information; 
   }
  }

  onClick(): void{
    if(this.task){
      this.tasks.unshift(this.task);
      // localStorage.setItem(LocalStorageKey.TASK, JSON.stringify(this.tasks));
      this.localStorageUtils?.setInfomation<string[]>(LocalStorageKey.TASK,this.tasks);
      this.task = "";
    }
  }

  onInput(task: string | null): void {
    if(task){
      this.task = task;
    }
  }
}
