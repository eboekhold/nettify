import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Task } from '../app';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private http = inject(HttpClient);
  task = signal<Task | null>(null);

  ngOnInit(): void {
    this.http.get<Task>('/api/Tasks/random')
      .subscribe(data => this.task.set(data));
  }
}
