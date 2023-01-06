import { Injectable } from '@angular/core';
import { Product } from 'src/models/product/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../models/commons/Url';
import { IBaseRepository } from '../../repositories/IBaseRepository';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IBaseRepository<Product> {

  public selectedProduct: Product;
  public products: Product[] = [];
  private readonly PRODUCT: string = 'product';

  constructor(private readonly http: HttpClient) {
    this.selectedProduct = new Product();
  }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${ URL }/${ this.PRODUCT }`);
  }

  post(data: Product): Observable<Product> {
    return this.http.post(`${ URL }/${ this.PRODUCT }`, data);
  }

  getById(id: string): Observable<Product> {
    return this.http.get(`${ URL }/${ this.PRODUCT }/${ id }`);
  }

  put(data: Product): Observable<Product> {
    console.log(data.id);
    return this.http.put(`${ URL }/${ this.PRODUCT }/${ data.id }`, data);
  }

  delete(id: string): Observable<Product> {
    return this.http.delete(`${ URL }/${ this.PRODUCT }/${ id }`);
  }
}
