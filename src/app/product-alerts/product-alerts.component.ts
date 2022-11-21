// ProductAlertsComponent が商品データを受け取れるようにするため、@angular/core から Input をインポートする
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Product } from "../products";

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

  // @Input() デコレーター
  // プロパティの値が親コンポーネントから渡されることを示す
  // @Input() デコレーターを付けて、プロパティ product を定義する
  @Input() product: Product | undefined;

  // notify という名前のプロパティを @Output() デコレーターと EventEmitter() のインスタンスで定義する
  // @Output() で設定することで、notify プロパティの値が変更されたときにProductAlertsComponentがイベントを発行できる
  @Output() notify = new EventEmitter();
  ngOnInit(): void {}
}
