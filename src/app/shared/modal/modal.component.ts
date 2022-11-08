import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

import { AppService } from '../service/api-db.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal: PoModalComponent;
  titleModal = '+ Nova Transação >';
  form: FormGroup;
  isHideLoading = true;
  item:any;

  @Output() reloadList = new EventEmitter();


  constructor(
    private formulario: FormBuilder,
    private serviceItems: AppService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.formModal();
  }

  public formModal() {
    this.form = this.formulario.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      valor: [null, [Validators.required]],
      data: [null,[Validators.required]]
    });
  }
  primary: PoModalAction = {
    // disabled: false,
    label: 'Salvar',
    action: () => this.save(),
  };

  secundary: PoModalAction = {
    label: 'Cancelar',
    action: () => this.cancel(),
  };

  public modalOpen() {
    this.modal.open();
  }

  private save() {
    if (this.form.valid) {
      this.serviceItems.create(this.form.value).subscribe(
        () => {
          this.modal.close();
          // this.form.reset();
          this.poNotification.success('deu certo')
          this.reloadList.emit();
        }
      );
    }
        
  }

  private cancel() {
    this.modal.close()
    this.form.reset();
  }
}
