import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface APIResponseInterface {
  market_data: MarketDataInterface;
}

interface MarketDataInterface {
  current_price: { [key: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class BTCService {

  public readonly btcPriceUSD = signal<number>(0);
  public readonly ticker = signal<string>('bitcoin');
  private readonly _http: HttpClient = inject(HttpClient);

  constructor() {
    this.refresh();
    console.log('Hello');
  }
  
  refresh() {
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
    const request = this._http.get<APIResponseInterface>(url);
    const reponse: APIResponseInterface = await firstValueFrom(request);
    // extract response from JSON
    const price: number = reponse.market_data.current_price['usd'];
    // return price value as number
    console.log('hi', price)
    this.btcPriceUSD.update((currentPrice: number)=> {
      // ....
      return price;
    });
  }
}
