import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartmentList() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJqdGkiOiJlMDZiYmU2OS05M2YwLTQyMWEtODhmNS04OTgzYWYwYTc1MDUiLCJjb21wYW55Y29kZSI6InBiZyIsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyZ3JvdXBpZCI6IjIiLCJ1c2VyZ3JvdXBjb2RlIjoiU0EiLCJleHAiOjE2ODYzNjI1ODMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjE5NTUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.OIoxDMHI-ynmQwLhEQB-9bgmRQZrqgX-WWijDUHELQ0'
    });


    return this.http.post(
      'http://kageshwori.soft-acc.com/Department/ServerSearch',
      {
        "model": {
          "draw": 0,
          "start": 0,
          "length": 50,
          "search": {
            "value": "",
            "regex": ""
          }
        },
        "param": {
          "DepartmentID": 0
        }
      },
      {
        headers: reqHeader
      })
  }

  saveNewDepartment(dpt: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJqdGkiOiJlMDZiYmU2OS05M2YwLTQyMWEtODhmNS04OTgzYWYwYTc1MDUiLCJjb21wYW55Y29kZSI6InBiZyIsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyZ3JvdXBpZCI6IjIiLCJ1c2VyZ3JvdXBjb2RlIjoiU0EiLCJleHAiOjE2ODYzNjI1ODMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjE5NTUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.OIoxDMHI-ynmQwLhEQB-9bgmRQZrqgX-WWijDUHELQ0'
    });

    return this.http.post(
      'http://kageshwori.soft-acc.com/SaveDepartment',
      dpt,
      {
        headers: reqHeader
      })
  }
}
