import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-cmp-totais',
  templateUrl: './cmp-totais.component.html'
})
export class CmpTotaisComponent implements OnInit {

  @Input() frete: number
  @Input() vItens: number

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.frete + this.vItens
  }

}
