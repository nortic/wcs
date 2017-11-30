import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILesson } from './shared/event.model';

@Component({
    templateUrl: './create-lesson.component.html',
    styles: [`
    em {float: right; color: #ff3232; padding-left: 10px;}
    .error input {background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
    `]
})
export class CreateLessonComponent implements OnInit {
    newLessonForm:FormGroup;
    theme:FormControl;
    teachers:FormControl;
    level:FormControl;
    description:FormControl;
    constructor() {
        
    }

    ngOnInit() {
        this.theme = new FormControl('', [Validators.required, Validators.maxLength(250), this.restrictedWords(['foo', 'bar'])]);
        this.teachers = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.description = new FormControl('');

        this.newLessonForm = new FormGroup({
            theme: this.theme,
            teachers: this.teachers,
            level: this.level,
            description: this.description,
        })
    }

    saveLesson(formValues) {
        let lesson:ILesson = {
            id: undefined,
            theme: formValues.theme,
            teachers: formValues.teachers,
            level: formValues.theme,
            description: formValues.description
        }
        console.log('SAVE !!!', lesson);
    }

    private restrictedWords(words) {
        return (control: FormControl): { [key: string]:any } => {
            if (!words) {
                return null;
            }
            let invalidWords = words
                .map(w => control.value.includes(w) ? w : null)
                .filter(w => w != null);
                return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(',') } : null;
        }
    }
}