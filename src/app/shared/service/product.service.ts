import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  public getProductsWithFlag(flag: string): Observable<ProductService> {
    return this.httpClient.get<ProductService>(this.apiUrl + '?flag=' + flag)
  }

}
