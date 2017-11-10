import { Component } from '@angular/core';

@Component({
    template: '<h1>This page does not exist !</h1>',
    styles: [`
    .error-message {
        margin-top: 150px;
        font-size: 170px;
        text-align: center;
    }`]
})
export class Error404Component {
    constructor() {

    }
}