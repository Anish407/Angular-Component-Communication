import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { EmployeeAddComponent } from 'src/addNewEmployee/addEmployee.component';

@Injectable()

export class CheckUserAddDirtyNavigateService {

   canDeactivate(component: EmployeeAddComponent){
     return  window.confirm("Do you want to save the changes ? ")
   }
}