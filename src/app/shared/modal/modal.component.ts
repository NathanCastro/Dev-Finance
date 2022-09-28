import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal: PoModalComponent;
  titleModal = '+ Nova Transação >'
  form: FormGroup;
  


  constructor( 
    private formulario: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formModal()
  }

  formModal(){
    this.form = this.formulario.group({
      name: [null, [Validators.required] ]
    })
  }
  primary:PoModalAction = {
    // disabled: false,
    label: 'Salvar',
    action: () => this.save()
  }

  secundary: PoModalAction = {
    label: 'Cancelar',
    action: () => this.cancel()
  }

  modalOpen(){
    this.modal.open()
  }

  
  save(){
    console.log('aqui vem o valor',this.form.value);

    if(this.form.valid){      
      console.log(this.formulario);
      console.log('salvar');
      
    }else{
      console.log('else');
    }
    
  }

  cancel(){
    // this.modal.close()
    this.form.reset()
    console.log('reset pegou');
    
  }
  
  onSubmit(){
   
    
  }
}
