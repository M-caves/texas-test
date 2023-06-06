import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertifyService } from '../_service/alertify.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  

  constructor(private alt: AlertifyService, public ngbModal: NgbModal) {
    this.alt.showSuccessMessage('hello');
    // this.ngbModal
    //   .open(this.testModalVar, {
    //     ariaLabelledBy: 'modal-basic-title',
    //     windowClass: 'modal-bms',
    //     backdropClass: 'ngb-modal-backdrop',

    //     // backdrop:false
    //   })
    //   .result.then(
    //     (result) => {
          
    //     },
    //     (reason) => {
          
    //     }
    //   );
  }

  ngOnInit() {
  }

}
