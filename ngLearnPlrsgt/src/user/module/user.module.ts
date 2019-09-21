import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { profileComponent } from '../profile.component';
import { routes } from './user.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [


    ],
    declarations: [
        profileComponent

    ]
})

export class UserModule {

}