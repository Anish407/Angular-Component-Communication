import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/entry';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './event-details.html'
})

export class EventDetailsComponent implements OnInit {

    event: Employee;
    ngOnInit(): void {
        this.event = this.dataService.getDataById(this.routeParams.snapshot.params['id']);
    }


    constructor(private dataService: DataService, private routeParams: ActivatedRoute) {

    }

}