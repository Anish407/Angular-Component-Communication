import { Routes } from '@angular/router'
import { EventsListComponent } from 'src/events/events-list.component';
import { EventDetailsComponent } from 'src/event-details/event-details.component';
import { EmployeeAddComponent } from 'src/addNewEmployee/addEmployee.component';
import { NotFoundComponent } from 'src/not-found/not-found.component';
import { CheckRouteDataService } from 'src/services/checkExistingIdRoute.service';
import { CheckUserAddDirtyNavigateService } from 'src/services/checkUserDirtyNavigateService';
import { ContentProjectionComponent } from 'src/content-projection/content-projection.component';


export const routeValues: Routes = [

    { path: "events", component: EventsListComponent },
    { path: "events/new", component: EmployeeAddComponent, canDeactivate: [CheckUserAddDirtyNavigateService] },
    { path: 'notFound', component: NotFoundComponent },
    { path: "events/:id", canActivate: [CheckRouteDataService], component: EventDetailsComponent },
    {path:'content', component:ContentProjectionComponent},
    { path: "", redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: '../user/module/user.module#UserModule' },
   
]