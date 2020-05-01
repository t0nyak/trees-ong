import { Component, OnInit } from "@angular/core";
import { ShopService } from "src/app/services/shop.service";
import { ShopCategory } from "src/app/models/shop-category";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent implements OnInit {
  categories: ShopCategory[];
  products: Product[];

  constructor(private shopService: ShopService) {}

  async ngOnInit() {
    this.categories = await this.shopService.getCategories();
    this.products = await this.shopService.getProducts();
  }
}
