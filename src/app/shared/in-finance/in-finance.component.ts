import { Component, OnInit } from '@angular/core';

import { AppService } from '../service/api-db.service';

@Component({
  selector: 'app-in-finance',
  templateUrl: './in-finance.component.html',
  styleUrls: ['./in-finance.component.scss']
})
export class InFinanceComponent implements OnInit {

 valendo:any;
 getValueResult:number;
 public logo = 'assets/logo.svg';
 valorResultado:number
 
 constructor(private serviceEntrada: AppService){}

 ngOnInit() {
  this.resultado();
  // this.getResult()
 }

  getResult(): void{    
    this.getValueResult = this.serviceEntrada.sum(5)
    console.log('oi',this.getValueResult);
    
  }

  resultado(){
    this.valendo = this.serviceEntrada.create(this.valorResultado)
  } 

}


//colocar o valor do form dentro do serviço sum