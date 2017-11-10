
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    getEvents() {
        return events;
    }
}

const events:any = [
            { name: 'BF', location: { city: 'Paris', country: 'France' }, startDate: '10/01/2018', endDate: '14/01/2018', earlyPrice: 210, latePrice: 230, onSpotPrice: 250 },
            { name: 'PWF', location: { city: 'Budapest', country: 'Hungary' }, startDate: '19/01/2018', endDate: '21/01/2018', earlyPrice: 145, latePrice: 155, onSpotPrice: 165 },
            { name: 'WIL', location: { city: 'Lyon', country: 'France' }, startDate: '09/03/2018', endDate: '12/03/2018', earlyPrice: 120, latePrice: 130, onSpotPrice: 140 }
        ];