import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'customDecorator' })

export class CustomDecorator implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case "Anish":
                return "Mr " + value;
            case "Jeeba":
                return "Ms " + value;
            case "Jiya":
                return "Ms " + value;
            default:
                return "Mr/Ms " + value;
        }
    }

}