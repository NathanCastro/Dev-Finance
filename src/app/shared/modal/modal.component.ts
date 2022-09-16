import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal: PoModalComponent;
  link = '+ Nova Transação >'
 
  constructor() { }

  ngOnInit(): void {
  }

  modalOpen(){
    this.modal.open()
  }

  

}
