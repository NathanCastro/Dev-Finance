import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor(
    private formulario: FormBuilder,
    private serviceItems: AppService,
    private location: Location,
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

   save() {
    if (this.form.valid) {
      this.serviceItems.create(this.form.value).subscribe();
    }
    this.serviceItems.update(this.item).subscribe( retorno => {
      this.item = retorno
    })
    // this.load();
    this.modal.close();
    this.poNotification.success('deu certo')
    
  }

  private cancel() {
    this.modal.close()
    this.form.reset();
  }

  // Não está funcionando mais
  // private load() {
  //   (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && 
  //   location.reload();
  //   sessionStorage.refresh = false;    
  // }
}
