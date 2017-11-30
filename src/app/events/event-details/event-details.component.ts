import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';
import { IEvent } from '../shared/event.model';

@Component({
    selector: 'event-details',
    template: `
    <button [routerLink]="['/events']">Back</button>
    <div class="well">
        <h2>Name: {{event.name}}</h2>
        <div>From: {{event.startDate}}</div>
        <div>To: {{event.endDate}}</div>
        <div>Price: {{event.earlyPrice}}&nbsp;€
        <div>
            <span>Location: {{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div>
            <button class="btn btn-primary" (click)="handleParticipateClick(event.name)">Participate</button>
        </div>

        <div class="row">
            <div class="col-md-2">
                <h3 style="margin:0">Lessons</h3>
            </div>
            <div class="col-md-2">
                <a (click)="addLesson()">Add lesson</a>
            </div>
        </div>

        <lesson-list *ngIf="!addMode && event?.lessons" [lessons]="event?.lessons"></lesson-list>
        <create-lesson *ngIf="addMode"></create-lesson>
    </div>
    `,
    styles: [`
    a {
        cursor: pointer;
    }
    `]
})
export class EventDetailsComponent implements OnInit {
    event:IEvent;
    addMode:Boolean;
    constructor(private route:ActivatedRoute, private eventService:EventService, private toastr:ToastrService) {
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    handleParticipateClick(name, e) {
        this.toastr.success(`Participating ${name} !`);
        e.stopPropagation();
        e.preventDefault;
        return false;
    }

    addLesson() {
        this.addMode = true;
    }

}