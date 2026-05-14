import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from '../task-item/task-item';

interface Task {
  id: number;
  name: string;
  isComplete: boolean;
}

@Component({
  selector: 'task-list',
  imports: [TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  private http = inject(HttpClient);
  tasks = signal<Task[]>([]);

  ngOnInit(): void {
    this.http.get<Task[]>('/api/Tasks')
      .subscribe(data => this.tasks.set(data));
  }
}
