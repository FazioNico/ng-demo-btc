import { Component, Input, input, OnInit, output, signal } from '@angular/core';

interface APIResponseInterface {
  market_data: MarketDataInterface;
}

interface MarketDataInterface {
  current_price: { [key: string]: number };
}

@Component({
  selector: 'app-btc',
  imports: [],
  templateUrl: './btc.html',
  styleUrl: './btc.css',
})
export class BTC implements OnInit {
  public price = signal<number>(0);
  // new input version based on Signal here
  public ticker = input.required<string>();
  // old input version here
  @Input() public ticker2: string = '';
  // output new version here
  public priceChange = output<number>();

  ngOnInit(): void {
    setTimeout(() => {
      this.getPtcPrice();
    }, 2000);
  }

  async getPtcPrice($event?: MouseEvent): Promise<void> {
    console.log('clicked', $event);
    if ($event) {
      ($event.target as HTMLButtonElement).disabled = true;
    }
    // API url
    const url: string = `https://api.coingecko.com/api/v3/coins/${this.ticker()}`;
    // call API using fetch()
    const request: Response = await fetch(url);
    const reponse: APIResponseInterface = await request.json();
    // extract response from JSON
    const price: number = reponse.market_data.current_price['usd'];
    // return price value as number
    console.log('hi', price)
    this.price.update(()=> price);
    this.priceChange.emit(price);
    if ($event) {
      ($event.target as HTMLButtonElement).disabled = false;
    }
  }

}
