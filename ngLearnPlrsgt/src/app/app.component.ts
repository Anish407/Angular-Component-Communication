import { Component } from '@angular/core';
import { Employee } from 'src/models/entry';
import { DataService } from 'src/services/data.service';
import { UserService } from 'src/user/userService/user.service';
import { IUser } from 'src/user/models/IUser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngLearnPlrsgt';
  eventData: Employee[];

  constructor(private dataService: DataService, private userService: UserService) {
    this.eventData = dataService.getData();
  }

  addNewEmployee(value: IUser): void {
    this.userService.setUserName(value.name);

  }
}
