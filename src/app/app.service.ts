import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Entrada } from '../app/shared/content/entrada';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/entrada'

  list() {
    return this.http.get<Entrada[]>(this.API);
  }
}
