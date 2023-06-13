import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../_service/department.service';
import { AlertifyService } from '../_service/alertify.service';
import Handsontable from 'handsontable';
import { getData } from "./../_utils/constants";
import {
  alignHeaders,
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell
} from "./../_utils/hooks-callback";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  model: any = {}
  departmentList: any = []
  columns : any = [];

  dataset = getData();
  alignHeaders = alignHeaders;
  drawCheckboxInRowHeaders = drawCheckboxInRowHeaders;
  addClassesToRows = addClassesToRows;
  changeCheckboxCell = changeCheckboxCell;
  colHeaders = [
    "Company name",
    "Country",
    "Name",
    "Sell date",
    "Order ID",
    "In stock",
    "Qty",
    "Progress",
    "Rating"
  ];
  hiddenColumns = {
    indicators: true,
  };
  licenseKey = "non-commercial-and-evaluation";

  constructor(private deptService: DepartmentService,
    private alrt: AlertifyService
  ) {
    this.loadDepartmentList()
    this.manageColumns()
  }

  ngOnInit() {
  }

  manageColumns() {
    this.columns = [
      { keyName: 'Department Name', keyValue: 'DepartmentName' },
      { keyName: 'Department Code', keyValue: 'DepartmentCode' },
      { keyName: 'Order Key', keyValue: 'OrderKey' },
    ];
  }

  loadDepartmentList() {
    this.deptService.getDepartmentList()
      .subscribe((resp: any) => {
        this.departmentList = resp.data!.filter((x: any) => {
          if (x.DepartmentName != '') {
            return x;
          }
        })

      })
  }
  onSubmit() {
    this.model.ParentDepartmentID = Number(this.model.ParentDepartmentID);
    this.model.OrderKey = Number(this.model.OrderKey);

    this.model.DepartmentID = Number(this.model.DepartmentID) || 0;

    this.deptService.saveNewDepartment(this.model)
      .subscribe((resp: any) => {
        if (resp["Success"] == true) {
          this.alrt.showSuccessMessage(resp["Message"]);
          this.clearForm();
          this.loadDepartmentList();
        } else {
          this.alrt.showErrorMessage(resp["Message"]);
        }
      })
  }

  clearForm() {
    this.model = {};
  }

  onDelete(id: number) {
    var ok = confirm('are you sure to delete data?')
    if (ok) {
      this.deptService.deleteDepartment(id)
        .subscribe((x: any) => {
          if (x.Success) {
            this.alrt.showSuccessMessage(x.Message);
            this.loadDepartmentList();
          } else {
            this.alrt.showErrorMessage(x.Message);
          }
        })
    }
  }
  onEdit(item: any) {
    console.log(item);
    this.model.DepartmentName = item.DepartmentName;
    this.model.DepartmentCode = item.DepartmentCode;
    this.model.OrderKey = item.OrderKey;
    this.model.ParentDepartmentID = item.ParentDepartmentID;
    this.model.DepartmentID = item.DepartmentID;
  }
}
