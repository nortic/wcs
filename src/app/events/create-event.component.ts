import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService} from './shared/event.service';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float: right; color: #ff3232; padding-left: 10px;}
    .error input {background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
    `]
})
export class CreateEventComponent {
    isDirty: boolean;
    constructor(private router:Router, private eventService:EventService) {
        this.isDirty = true;
    }

    saveEvent (event) {
        this.eventService.saveEvent(event);
        this.isDirty = false;
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}