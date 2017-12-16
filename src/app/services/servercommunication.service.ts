import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

var schemas = {
    education: {
        properties: {
        schoolUniversityName: "SchoolName",
        majorFiedOfStudy: "Major",
        typeOfDegree: "degree_program_type",
        startYear: "start_year",
        endYear: "end_year",
        degreeProgramStatus: "degree_program_status",
        honors: "honors"
        },
        required: new Set([
            'schoolUniversityName',
            'majorFiedOfStudy',
            'typeOfDegree',
            'startYear',
            'endYear',
            'degreeProgramStatus'
        ])
    }
} 



@Injectable()
export class ServerCommunicationService {
    static herokuUrl = '';
    static localUrl = 'http://localhost:8080/';
    private myHTTP: Http;
    constructor(private http: Http) {
        this.myHTTP = http;
    }

    isTest(){
        console.log("I am working from the  Servcer Communications Service");
    }

    jsonBuilder(id: string, data: any){
        var jsonArray = {};
        console.log(schemas)
        if(schemas[id] !== undefined){
            var properties = schemas[id].properties;
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    if(data.controls[properties[key]].value!==""){
                        jsonArray[key] = data.controls[properties[key]].value;
                    }
                }
            }
        }
        return JSON.stringify(jsonArray);
    }


    postService(id: string, data: any, errorHandler: any){
        id = 'test'
        var id1 = 'education'
        var jsonData = this.jsonBuilder(id1,data);
        console.log(jsonData);
        return this.myHTTP.post(ServerCommunicationService.localUrl+id,jsonData);
    }
}

