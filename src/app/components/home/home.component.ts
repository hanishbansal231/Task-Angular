import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [ TaskComponent ],
   templateUrl: './home.component.html',
   styleUrl: './home.component.scss'
})
export class HomeComponent {}
