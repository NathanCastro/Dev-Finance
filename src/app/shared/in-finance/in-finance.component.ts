import { Component, OnInit } from '@angular/core';

import { AppService } from '../service/api-db.service';

@Component({
  selector: 'app-in-finance',
  templateUrl: './in-finance.component.html',
  styleUrls: ['./in-finance.component.scss']
})
export class InFinanceComponent implements OnInit {
 teste:number;
 getValueResult:number;
 public logo = 'assets/logo.svg' ;
 
 constructor(private serviceEntrada: AppService){}

 ngOnInit() {
  this.getResult(this.teste)
  console.log('getResult',this.getResult(this.teste));
  
 }

  getResult(resultValue: number): void{
    
    this.getValueResult = this.serviceEntrada.sum(resultValue)
    console.log(this.getValueResult);
    console.log('oi',this.serviceEntrada.sum(resultValue));
    
  }



}
