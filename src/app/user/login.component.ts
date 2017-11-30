import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em {
        float: right;
        color: #ff3232;
        padding-left: 10px;
    }
    `]
})
export class LoginComponent {
    constructor(private authService:AuthService, private router:Router) {

    }

    login(formValues:any) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}