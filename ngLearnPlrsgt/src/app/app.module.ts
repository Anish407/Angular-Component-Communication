import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EventsListComponent } from 'src/events/events-list.component';
import { EmployeeAddComponent } from 'src/addNewEmployee/addEmployee.component';
import { ParentChildDemoComponent } from 'src/parentToChild/parentToChild.component';
import { DataService } from 'src/services/data.service';
import { ToasterService } from 'src/services/Toaster.service';
import { RouterModule } from '@angular/router';
import { routeValues } from 'src/routes/routes';
import { EventDetailsComponent } from 'src/event-details/event-details.component';
import { NavbarComponent } from './nav-bar/navbar.component';
import { NotFoundComponent } from 'src/not-found/not-found.component';
import { CheckRouteDataService } from 'src/services/checkExistingIdRoute.service';
import { CheckUserAddDirtyNavigateService } from 'src/services/checkUserDirtyNavigateService';
import { UserService } from 'src/user/userService/user.service';
import { ContentProjectionComponent } from 'src/content-projection/content-projection.component';
import { MyComponent } from 'src/content-projection/myContent/my-content.component';
import { CustomDecorator } from 'src/CustomPipe/myCustom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EmployeeAddComponent,
    ParentChildDemoComponent,
    EventDetailsComponent,
    NavbarComponent,
    NotFoundComponent,
    ContentProjectionComponent,
    MyComponent,
    CustomDecorator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeValues)
  ],
  providers:
    [
      DataService,
      ToasterService,
      CheckRouteDataService,
      CheckUserAddDirtyNavigateService,
      UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
