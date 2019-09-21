import { Injectable } from "@angular/core";
import { IUser } from '../models/IUser';

@Injectable()

export class UserService {
    currentUser: IUser;


    constructor() {
        this.currentUser = {
            name: 'Anish',
            age: 30,
            dob: '22-12-1988'
        };
    }

    getUser(): IUser {
        return this.currentUser;
    }

    setUserName(name: string): void {
        this.currentUser.name = name;
    }

    // setUser(name: string, age: number, dob: string): void {
    //     this.currentUser.dob = dob;
    //     this.currentUser.age = age;
    //     this.currentUser.name = name;
    // }

}