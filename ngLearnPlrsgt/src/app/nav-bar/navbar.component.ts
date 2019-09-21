import { Component } from "@angular/core";
import { UserService } from 'src/user/userService/user.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.html'
})

export class NavbarComponent {


    constructor(private userServc: UserService) {
        //alert(JSON.stringify(userServc));
    }
}