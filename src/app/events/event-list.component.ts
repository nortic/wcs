import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:any;
  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
