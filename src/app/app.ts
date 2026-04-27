import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BTC } from './components/btc/btc';
import { DumpBtc } from './components/dump-btc/dump-btc';
import { HasWordPipe } from './pipes/has-word/has-word-pipe';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BTCService } from './services/btc/btc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BTC, DumpBtc, HasWordPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // providers: [
  //   BTCService
  // ]
})
export class App {
  protected title = 'Fazio Angular';
  protected ticker = 'bitcoin';
  protected price = signal<number>(0);
  protected btcPrice = inject(BTCService).btcPriceUSD;

  protected demoForm = new FormGroup({
    firstName: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.required,
    ])),
    lastName: new FormControl(''),
    adresses: new FormArray([
      new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        npa: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
      })
    ]),
  });

  updatePrice($event: number) {
    this.price.update(()=> $event);
  }

  submit() {
    console.log(this.demoForm);
  }

  addAddress() {
    const arrayCtrl = this.demoForm.get('adresses') as FormArray;
    arrayCtrl.push(new FormGroup({
      street: new FormControl(),
      number: new FormControl(),
      npa: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    }));
  }
}
