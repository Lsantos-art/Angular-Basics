import { Products } from 'src/app/shared/model/products.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getUrl = 'https://produtos-api-lsantos.herokuapp.com/api/';
  postUrl = 'https://produtos-api-lsantos.herokuapp.com/api/produto';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProductsWithFlag(flag: string): Observable<Products> {
    return this.httpClient.get<Products>(this.getUrl + flag)
  }

  public postProducts(product: any): Observable<Products> {
    return this.httpClient.post<any>(this.postUrl, product, this.httpOptions)
  }

}
