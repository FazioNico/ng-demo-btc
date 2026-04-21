import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BTC } from './components/btc/btc';
import { DumpBtc } from './components/dump-btc/dump-btc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BTC, DumpBtc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Fazio';
  protected ticker = 'bitcoin';
  protected price = signal<number>(0);

  updatePrice($event: number) {
    this.price.update(()=> $event);
  }
}
