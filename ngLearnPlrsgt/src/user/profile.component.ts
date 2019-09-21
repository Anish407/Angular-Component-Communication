import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './userService/user.service';

@Component({

    templateUrl: './profile.component.html'
})

export class profileComponent implements OnInit {
    myForm: FormGroup;

    constructor(private router: Router, private userService: UserService) {

    }

    ngOnInit(): void {
        let name = new FormControl();
        let age= new FormControl();
        let dob= new FormControl();

        this.myForm
         = new FormGroup({
            name: name,
            age: age,
            dob: dob
        })
    }

    submitData(value): void {
        this.userService.setUserName(value.name);
    }

    cancel(): void {
        this.router.navigate(['events']);
    }




}