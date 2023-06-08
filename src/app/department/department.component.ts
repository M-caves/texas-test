import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../_service/department.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  model :any = {}
  departmentList : any = []
  constructor(private deptService: DepartmentService,
              private alrt : AlertifyService
    ) { 
      this.loadDepartmentList()
    }

  ngOnInit() {
  }

  loadDepartmentList(){
    this.deptService.getDepartmentList()
    .subscribe((resp:any) => {
      debugger
      
      this.departmentList = resp.data!.map((x) => {return x.DepartmentName != ''})
    })
  }
  onSubmit(){
    this.model.ParentDepartmentID = Number(this.model.ParentDepartmentID);
    this.model.OrderKey = Number(this.model.OrderKey);
    
    this.deptService.saveNewDepartment(this.model)
    .subscribe((resp:any) => {
      if(resp["Success"] == true){
        this.alrt.showSuccessMessage(resp["Message"]);
        this.clearForm();
      }else{
        this.alrt.showErrorMessage(resp["Message"]);
      }
    })
  }

  clearForm(){
    this.model = {};
  }
}
