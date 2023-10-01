import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detail-student-action-buttons',
  templateUrl: './detail-student-action-buttons.component.html',
  styleUrls: ['./detail-student-action-buttons.component.css']
})
export class DetailStudentActionButtonsComponent {
  @Output()
  onClickEventEmmiter = new EventEmitter();

  emitEvent(){
    this.onClickEventEmmiter.emit();
  }
}
