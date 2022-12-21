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
  lista:any[];
  
  entradas$: Observable<Entrada[]>;  
  isHideLoading = true;
  itemSelecionado:Entrada;
  mensagem:'deu ruim'

  
  columns:PoTableColumn[] = [
    {property: 'id', label:'Id'},
    {property: 'name', label:'Nome'},
    {property: 'valor', label:'Valor', format:'BRL'} ,
    {property: 'data', label:'Data', type:'date'}
  ]
  
  tableAction:PoTableAction[] = [{
    label: '',
    icon: 'po-icon po-icon-delete',
    action: this.deleteItem.bind(this)

  }]

  ngOnInit(): void {
    this.listemDate(); 
    this.isLoading()    
  }

  listemDate(){    
    this.serviceListagem.list().subscribe(res =>{
      this.lista = res;
      this.isLoading()
    })
   
  }

  deleteItem(itemSelecionado:Entrada){
    this.serviceListagem.delete(itemSelecionado.id).subscribe(
      () => this.listemDate()      
    );   
  }


  isLoading(){
    this.isHideLoading = false;
    setTimeout(() => {
      this.isHideLoading = true;
    }, 2000);
  }

  reloadList(event){
    this.listemDate();
  }
  
}
