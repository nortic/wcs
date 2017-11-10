import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>Name: {{event.name}}</h2>
        <div>From: {{event.startDate}}</div>
        <div>To: {{event.endDate}}</div>
        <div>Price: {{event.earlyPrice}}€
        <div>
            <span>Location: {{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div>
            <button class="btn btn-primary" (click)="handleParticipateClick()">Participate</button>
        </div>
    </div>`
})
export class EventThumbnailComponent {
    @Input() event:any;
    constructor() {
        
    }

    handleParticipateClick() {
        console.log('YES I WILL !')
    }
}