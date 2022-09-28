import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../app/app.service';
import { Entrada } from './entrada';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private serviceListagem: AppService) { }

  entradas: Entrada[]

  ngOnInit(): void {
    this.serviceListagem.list().subscribe(dados => this.entradas = dados);
    
  }

  table: Entrada[] = [{
    id: null,
    descricao: null, 
    // valor: null,
    // data: null
  }]


}
