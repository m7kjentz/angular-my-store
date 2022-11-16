import { Component, OnInit } from "@angular/core";

// @Component() デコレーター
// 続くクラスがコンポーネントであることを示す
// @Component() はセレクター、テンプレート、スタイルなど、コンポーネントに関するメタデータを提供する

// Component() の機能
// app-product-alerts という selector はコンポーネントを識別する
// 慣例では、 Angular のコンポーネントセレクターは接頭辞 app- で始まり、その後にコンポーネント名が続く
// テンプレートとスタイルのファイル名は、コンポーネントの HTML と CSS を参照する
// @Component() 定義は、コンポーネントの機能を処理するクラス ProductAlertsComponent もエクスポートする
@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
