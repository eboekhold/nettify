import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  forecasts = signal<WeatherForecast[]>([]);

  ngOnInit(): void {
    this.http.get<WeatherForecast[]>('/WeatherForecast')
      .subscribe(data => this.forecasts.set(data));
  }

  protected readonly title = signal('TaskrClient');
}
