import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dump-btc',
  imports: [],
  templateUrl: './dump-btc.html',
  styleUrl: './dump-btc.css',
})
export class DumpBtc {
  public price = input.required<number>();
}
