import { Component, Input } from '@angular/core';
import { ILesson} from '../shared/event.model';

@Component({
    selector: 'lesson-list',
    templateUrl: './lesson-list.component.html'
})
export class LessonListComponent {
    @Input() lessons:ILesson;
    constructor() {}
}