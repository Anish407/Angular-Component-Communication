import { Component, Input, OnInit } from '@angular/core'
import { Employee } from 'src/models/entry';
import { CommonModule } from '@angular/common';
import { ToasterService } from 'src/services/Toaster.service';
import { DataService } from 'src/services/data.service';


@Component({
    templateUrl: "./eventlist.html"
})


export class EventsListComponent implements OnInit {

    myEvent: Employee[];
    ngOnInit(): void {
        this.myEvent = this.dataService.getData();
    }
    // @Input() myEvent: Employee;

    constructor(private myToast: ToasterService, private dataService: DataService) {

    }



    displayName(name: string): void {
        this.myToast.success(name);
    }

}