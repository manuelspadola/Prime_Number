import { Component, OnInit } from '@angular/core';
import { PrimeStoreService } from '../shared/prime-store.service'
@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  title = 'PrimeNumber';

  grenzwert: number;
  primeNumbers: number[];
  dynamicPadding = 400;

  constructor(private ps: PrimeStoreService) { }

  ngOnInit(): void {
  }

  public doPrimeCall() {
    this.primeNumbers = [];
    this.ps.getPrimes(this.grenzwert).subscribe(primes =>{
      primes.forEach(prime => {
          this.primeNumbers.push(prime);
        });
    });

  }
}
