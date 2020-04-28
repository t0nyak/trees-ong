import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShopCategory } from "../models/shop-category";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  constructor(private http: HttpClient) {}

  async getCategories(): Promise<ShopCategory[]> {
    return await this.http
      .get<ShopCategory[]>(`${environment.apiUrl}shop/categories/`)
      .toPromise();
  }

  async getProducts(): Promise<Product[]> {
    return await this.http
      .get<Product[]>(`${environment.apiUrl}shop/products/`)
      .toPromise();
  }
}
