import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:IEvent[];
  constructor(private eventService:EventService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.events = this.activatedRoute.snapshot.data['events'];
  }

}
