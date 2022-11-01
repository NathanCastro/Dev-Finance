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

  columns:PoTableColumn[] = [
    {property: 'name', label:'Nome'},
    {property: 'valor', label:'Valor'},
    {property: 'data', label:'data', format: 'dd-MM-yy'}
  ]
  
  tableAction:PoTableAction[] = [{
    label: '',
    icon: 'po-icon po-icon-delete',
    action: this.deleteItem.bind(this)

  }]

  ngOnInit(): void {
    this.listemDate();    
  }

  listemDate(){    
    this.entradas$ = this.serviceListagem.list()
  }

  deleteItem(){
    console.log('oiiii');  
  }
}
