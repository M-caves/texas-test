import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Handsontable from 'handsontable';

import { ColumnModel } from 'src/app/model/columnsModel';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DDataListComponent implements OnInit {
  id = 'hotInstance';
  html = Handsontable.renderers.HtmlRenderer;

  @Input() data = [];
  @Input() columns: ColumnModel[] = [];

  @Output() actionEdit: EventEmitter<object> = new EventEmitter();
  @Output() actionDelete: EventEmitter<object> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private render: Renderer2,
    private http: HttpClient,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

}
