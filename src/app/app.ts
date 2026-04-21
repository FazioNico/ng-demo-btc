import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BTC } from './btc/btc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BTC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Fazio';
}
