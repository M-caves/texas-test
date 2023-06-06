import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JsonTestService {

    constructor(private http: HttpClient) {
        this.getDummyData();
    }

    getDummyData(){
       return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }

    getDataDetail(id:any){
        return this.http.get('https://jsonplaceholder.typicode.com/todos/'+id);
    }

}
