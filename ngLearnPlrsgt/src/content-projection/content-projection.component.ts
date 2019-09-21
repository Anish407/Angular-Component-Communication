import { Component, OnInit } from "@angular/core";
import { Employee } from 'src/models/entry';
import { DataService } from 'src/services/data.service';

@Component({
    templateUrl: './content-projection.html'
})

export class ContentProjectionComponent implements OnInit {
    ngOnInit(): void {
        this.employeeList = this.datasvc.getData();
    }

    constructor(private datasvc: DataService) {

    }
    employeeList: Employee[];


}