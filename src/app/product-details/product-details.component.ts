import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  // ActivatedRouteは、ルーターがロードする各ルーティングコンポーネントごとに固有
  // ルーティング、そのパラメータ、およびそのルーティングに関連する追加データに関する情報が含まれている
  // ActivatedRoute を注入することで、サービスを使用するようにコンポーネントを設定している
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
