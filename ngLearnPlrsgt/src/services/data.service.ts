import { Injectable } from "@angular/core";
import { Employee } from 'src/models/entry';

@Injectable()

export class DataService {
    getData(): Employee[] {
        return data;
    }

    getDataById(id: number) {
        return data.find(i => i.id == id);
    }

    setData(arg: Employee[]) {
        data = arg;
    }

}

var data: Employee[] = [
    { id: 1, dob: new Date("22/12/1988"), name: "Anish" },
    { id: 2, dob: new Date("22/12/1989"), name: "Jeeba" },
    { id: 31, dob: new Date("22/12/1999"), name: "Jiya" },
    { id: 32, dob: new Date("22/12/1900"), name: "Nalu" }
]