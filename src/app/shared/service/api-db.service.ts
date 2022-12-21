import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Entrada } from '../models/entrada';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private readonly API = `${environment.API}entrada`

  public list() {
    return this.http.get<Entrada[]>(this.API)
    .pipe();
  }

  public create(items){
    return this.http.post(this.API, items).pipe(take(1))
  }

  public delete(id:number){
    return this.http.delete<any>(`${this.API}/${id}`).pipe(take(1))
  }

  // sum(resultSum: number){
  //   let resultado: number = 0;
  //   resultado += resultSum;
  //   return resultado
  // }
 
}
