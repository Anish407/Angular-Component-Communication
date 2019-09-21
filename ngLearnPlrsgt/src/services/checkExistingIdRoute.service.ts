import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable()

export class CheckRouteDataService implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    /**
     *
     */
    constructor(private router: Router, private dataService: DataService) {

    }

    canActivate(routess: ActivatedRouteSnapshot) {
        var id = routess.params['id'];
        var res = this.dataService.getDataById(id);
        if (res === undefined) this.router.navigate(['notFound']);
        else return true;
    }

}