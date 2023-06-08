import { Component, OnInit } from '@angular/core';
import { JsonTestService } from '../_service/json-test.service';
import { DepartmentService } from '../_service/department.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  datas: any;
  constructor(private ser: JsonTestService,
    private dept: DepartmentService
  ) {
    //this.getData();
    this.dept.getDepartmentList()
      .subscribe(rsp => {
        console.log(rsp);
      })
  }

  ngOnInit() {
  }

  getData() {
    this.ser.getDummyData()
      .subscribe(resp => {
        this.datas = resp;
      });
  }
  getDetail(id: any) {
    this.ser.getDataDetail(id)
      .subscribe(resp => {
        debugger;
        console.log(resp);
      })
  }
}
