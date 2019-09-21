import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-component',
    templateUrl: './my-component.html'
})

export class MyComponent {
    showData: boolean = true;
    toggleData() {
        this.showData = !this.showData;
    }
}