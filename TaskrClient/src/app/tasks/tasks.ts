import { Component } from '@angular/core';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-tasks',
  imports: [TaskList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks { }
