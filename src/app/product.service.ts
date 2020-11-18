import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET products from the server */
getProducts(): Observable<any> {
  return this.http.get<any>(this.productUrl);
}
}
