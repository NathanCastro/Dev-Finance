import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Entrada } from '../models/entrada';
import { AppService } from '../service/api-db.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  // @Input() icon = "po-icon po-icon-delete"

  constructor(private serviceListagem: AppService) { }
  
  //entradas: Entrada[];
  
  
  entradas$: Observable<Entrada[]>;

  ngOnInit(): void {
    this.listemDate();    
  }

  listemDate(){
    // this.serviceListagem.list()
    // .subscribe(dados => this.entradas = dados);
    
    this.entradas$ = this.serviceListagem.list()
  }

  deleteItem(){
    console.log('oiiii');
    
  }
}
