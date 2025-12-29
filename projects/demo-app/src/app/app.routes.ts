import { Routes } from '@angular/router';
import { DirectiveClickOutside } from './components/directive-click-outside/directive-click-outside';
import { DirectiveTooltip } from './components/directive-tooltip/directive-tooltip';
import { NotFound } from './components/not-found/not-found';
import { PipeSafe } from './components/pipe-safe/pipe-safe';

export const routes: Routes = [
  { path: '', redirectTo: 'directives/click-outside', pathMatch: 'full' },
  {
    path: 'directives',
    children: [
      { path: 'click-outside', component: DirectiveClickOutside },
      { path: 'tooltip', component: DirectiveTooltip },
    ]
  },
  {
    path: 'pipes',
    children: [
      { path: 'safe', component: PipeSafe },
    ]
  },
  {
    path: '**',
    component: NotFound
  }
];