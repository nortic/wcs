import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';

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
            <button class="btn btn-primary" (click)="handleParticipateClick()">Participate</button>
        </div>
    </div>
    `
})
export class EventDetailsComponent implements OnInit {
    event:any;
    constructor(private route:ActivatedRoute, private eventService:EventService) {
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

}