import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

interface Task {
  id: number;
  name: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  tasks = signal<Task[]>([]);

  ngOnInit(): void {
    this.http.get<Task[]>('/api/Tasks')
      .subscribe(data => this.tasks.set(data));
  }

  protected readonly title = signal('TaskrClient');
}
