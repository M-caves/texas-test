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



// git command
/*

1. git init
2. git status
3. git add 'filename.html' , 'script.js'
   git add .
4. git commit -m "commit msg"
 
5. git checkout -b branch-rajan (to create a new branch)
  git checkout branch-rajan (to switch to existig branch)

6. git push origin branch-rajan

7. git reset (to remove the file from git add)

*/