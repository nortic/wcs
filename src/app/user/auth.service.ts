import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser:IUser;
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Lindo',
            userName: userName
        }
    }

    updateUser(firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}