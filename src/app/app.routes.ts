

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';
import { LogComponent } from './log/log.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'log',
    component: LogComponent
  },

  // Add this route:
//   {
//     path: 'app1',
//     loadComponent: () =>
//       loadRemoteModule('app1', './Component').then((m) => m.AppComponent),
//   },
  {
    path: 'app1',
    loadChildren: () =>
      loadRemoteModule('app1', './Routes').then((m) => m.routes),
  },
  {
    path:'app2',
    loadComponent:()=>loadRemoteModule('app2','./Component').then(m=>m.AppComponent)
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];