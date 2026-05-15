import { Routes } from '@angular/router';
import { Tasks } from './tasks/tasks';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'tasks',
    component: Tasks,
  }
];
