import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

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

  constructor(
    private formulario: FormBuilder,
    private serviceItems: AppService,
  ) {}

  ngOnInit(): void {
    this.formModal();
  }

  formModal() {
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

  modalOpen() {
    this.modal.open();
  }

  save() {
    if (this.form.valid) {
      this.serviceItems.create(this.form.value).subscribe(
        sucess => {
          console.log('sucesso');          
        }
      );
    }
    
    this.modal.close()
  }

  cancel() {
    this.modal.close()
    this.form.reset();
    console.log('reset pegou');
  }

  onSubmit() {
    console.log('testando');
    
  }
}
