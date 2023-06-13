import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list/data-list.component';
import { HotColumnComponent, HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


registerAllModules();

@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    CommonModule,
    HotTableModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[DataListComponent]
})
export class DataListModule { }
