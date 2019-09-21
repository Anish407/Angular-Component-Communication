import { Injectable } from "@angular/core";

declare let toastr:any

Injectable()

export class ToasterService {

    success(name: string): void {
        toastr.success(name);
    }

}