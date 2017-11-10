import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div (click)="handleThumbnailClick(event.id, $event); $event.stopPropagation()" class="well hoverwell thumbnail">
        <h2>Name: {{event.name}}</h2>
        <div>From: {{event.startDate}}</div>
        <div>To: {{event.endDate}}</div>
        <div>Price: {{event.earlyPrice}}&nbsp;€
        <div>
            <span>Location: {{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div>
            <button class="btn btn-primary" (click)="handleParticipateClick(event.name, $event)">Participate</button>
        </div>
    </div>`
})
export class EventThumbnailComponent {
    @Input() event:any;
    constructor(private router:Router, private toastr:ToastrService) {
    }

    handleThumbnailClick(id:number, e) {
        e.stopPropagation();
        e.preventDefault;
        console.log('EVENT', e, id)
        this.router.navigate(['/event', id]);
        return false;
    }

    handleParticipateClick(name, e) {
        this.toastr.success('HEYA !!!', name);
        e.stopPropagation();
        e.preventDefault;
        return false;
    }
}