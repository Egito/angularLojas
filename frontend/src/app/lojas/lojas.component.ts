import { Component, OnInit } from '@angular/core';
import { MLoja } from './loja.model';
import { LojasService } from './lojas.services';

@Component({
  selector: 'mt-lojas',
  templateUrl: './lojas.component.html'
})
export class LojasComponent implements OnInit {

  lojas: MLoja[]

  constructor(private lojasService: LojasService) { }

  ngOnInit() {
    this.lojasService.lojas()
      .subscribe(lojas => this.lojas = lojas)
  }

}
