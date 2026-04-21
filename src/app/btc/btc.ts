import { Component, signal } from '@angular/core';

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
export class BTC {
  public price = signal<number>(0);

  async getPtcPrice() {
    // API url
    const url: string = "https://api.coingecko.com/api/v3/coins/bitcoin";
    // call API using fetch()
    const request: Response = await fetch(url);
    const reponse: APIResponseInterface = await request.json();
    // extract response from JSON
    const price: number = reponse.market_data.current_price['usd'];
    // return price value as number
    console.log('hi', price)
    this.price.update(()=> price);
  }

}
