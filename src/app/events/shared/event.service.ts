
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';
import { IEvent } from './event.model';

@Injectable()
export class EventService {
    getEvents():Observable<IEvent[]> {
        let subject = new Subject<IEvent[]>();
        setTimeout(() => {subject.next(EVENTS); subject.complete();}, 100);
        return subject;
    }

    getEvent(id):IEvent {
        return EVENTS[id - 1];
    }

    saveEvent(event) {
        console.log('NEW EVENT', event)
        event.id = 999;
        event.lesson = [];
        EVENTS.push(event);
    }
}

const EVENTS:IEvent[] = [
    {
        id: 1, name: 'BF', location: { city: 'Budapest', country: 'Hungary' }, startDate: new Date('01/10/2018'), endDate: new Date('01/14/2018'), earlyPrice: 210, latePrice: 230, onSpotPrice: 250,
        lessons: [{
            id: 1,
            theme: 'Rock and Go',
            teachers: 'Ben & Victoria',
            room: 'A',
            level: 2,
            description: 'How to Rock n Go'
        }, {
            id: 1,
            theme: 'Pulsing',
            teachers: 'Jordan & Tat',
            room: 'A',
            level: 3,
            description: 'What is pulsing'
        }]
    },
    {
        id: 2, name: 'PWF', location: { city: 'Paris', country: 'France' }, startDate: new Date('01/19/2018'), endDate: new Date('01/21/2018'), earlyPrice: 145, latePrice: 155, onSpotPrice: 165,
        lessons: []
    },
    {
        id: 3, name: 'WIL', location: { city: 'Lyon', country: 'France' }, startDate: new Date('03/09/2018'), endDate: new Date('03/12/2018'), earlyPrice: 120, latePrice: 130, onSpotPrice: 140,
        lessons: []
    }
];