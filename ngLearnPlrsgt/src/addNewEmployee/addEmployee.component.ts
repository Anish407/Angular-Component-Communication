import { Component, Output, EventEmitter } from "@angular/core";
import { Employee } from 'src/models/entry';
import { Router } from '@angular/router';
import { UserService } from 'src/user/userService/user.service';


@Component({
    templateUrl: './addEmployee.html'
})

export class EmployeeAddComponent {
    newEmpl  = {} as Employee;
    @Output() addEvent = new EventEmitter();
    sample = "Anish";

    constructor(private routerConfig: Router, private userSvc: UserService) {

    }

    addNewEmp(item): void {
        this.userSvc.setUserName(this.newEmpl.name);
        //this.addEvent.emit(item);
    }

    cancel(): void {
        this.routerConfig.navigate(['/events'])
    }

}