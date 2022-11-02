import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Entrada } from '../models/entrada';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private readonly API = `${environment.API}entrada`

  list() {
    return this.http.get<Entrada[]>(this.API)
    .pipe(delay(2000));
  }

  create(items){
    return this.http.post(this.API, items).pipe(take(1))
  }

  update(items){
    return this.http.put(`${this.API}/${items}`, items).pipe()
  }

  sum(resultSum: number){
    let resultado: number = 0;
    resultado += resultSum;
    return resultado
  }
}
