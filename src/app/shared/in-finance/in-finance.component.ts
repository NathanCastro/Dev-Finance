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
  this.resultado()
  // console.log('getResult',this.getResult(this.teste));
  
 }

  getResult(resultValue: number): void{    
  //  this.getValueResult = this.serviceEntrada.sum(resultValue)
  //   console.log(this.getValueResult);
    
  }

  resultado(){
    this.valendo = this.serviceEntrada.create(this.valorResultado)
  }


}
