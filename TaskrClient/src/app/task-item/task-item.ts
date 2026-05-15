import { Component, input } from '@angular/core';
import { Task } from '../app';


@Component({
  selector: 'tr[task-item]',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  task = input<Task>();
}
