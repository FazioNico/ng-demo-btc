import { Component, input } from '@angular/core';
import { FormatNumberPipe } from '../../pipes/format-number/format-number-pipe';

@Component({
  selector: 'app-dump-btc',
  imports: [FormatNumberPipe],
  templateUrl: './dump-btc.html',
  styleUrl: './dump-btc.css',
})
export class DumpBtc {
  public price = input.required<number>();
}
