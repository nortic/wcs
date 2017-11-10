import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list.component';

export const appRoutes:Routes  = [
    { path: 'events', component: EventListComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];

