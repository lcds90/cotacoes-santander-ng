import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock = new Stock();
  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string {
    const number = Number(this.stock.variation).toFixed(2);
    const localizedVariationString =  number.toLocaleString();
    const prefix = this.stock.variation > 0 ?  '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-', '')}`;
  }

}
