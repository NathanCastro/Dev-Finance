import { Component, OnInit } from '@angular/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

import { Entrada } from '../models/entrada';
import { AppService } from '../service/api-db.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private serviceListagem: AppService) { }
   
  entradas$: Observable<Entrada[]>;  
  isHideLoading = true;
  itemSelecionado:Entrada;
  mensagem:'deu ruim'

  
  columns:PoTableColumn[] = [
    {property: 'id', label:'Id'},
    {property: 'name', label:'Nome'},
    {property: 'valor', label:'Valor'},
    {property: 'data', label:'Data', type:'date'}
  ]
  
  tableAction:PoTableAction[] = [{
    label: '',
    icon: 'po-icon po-icon-delete',
    action: this.deleteItem.bind(this)

  }]

  ngOnInit(): void {
    this.listemDate(); 
    this. isLoading()    
  }

  listemDate(){    
    this.entradas$ = this.serviceListagem.list()
  }

  deleteItem(itemSelecionado:Entrada){
    this.serviceListagem.delete(itemSelecionado.id).subscribe(
      () => {
        console.log(this.mensagem);                
      }
      
    )
    
  }


  isLoading(){
    this.isHideLoading = false;
    setTimeout(() => {
      this.isHideLoading = true;
    }, 2000);
  }
  
}
