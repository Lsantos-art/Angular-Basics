import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://produtos-api-lsantos.herokuapp.com/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProductsWithFlag(flag: string): Observable<Products> {
    return this.httpClient.get<Products>(this.apiUrl + flag)
  }

}
