import { Component, inject, Input, input, OnInit, output, signal } from '@angular/core';
import { BTCService } from '../../services/btc/btc';

@Component({
  selector: 'app-btc',
  imports: [],
  templateUrl: './btc.html',
  styleUrl: './btc.css',
  // providers: [
  //   BTCService
  // ]
})
export class BTC {
  public price = inject(BTCService).btcPriceUSD;
  // new input version based on Signal here
  public ticker = input.required<string>();
  // old input version here
  @Input() public ticker2: string = '';
  // output new version here
  public priceChange = output<number>();

  
}
