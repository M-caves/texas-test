import { Component, OnInit } from '@angular/core';
import { JsonTestService } from '../_service/json-test.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  datas: any;
  constructor(private ser: JsonTestService) {
    this.getData();
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
