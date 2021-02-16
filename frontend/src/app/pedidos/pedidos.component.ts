import { Component, OnInit } from '@angular/core';
import { MLoja } from '../lojas/loja.model';
import { ActivatedRoute } from '@angular/router';
import { LojasService } from '../lojas/lojas.services';

@Component({
  selector: 'mt-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {

  loja: MLoja

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.lojasService.lojaById(this.route.snapshot.params['id'])
      .subscribe(loja => this.loja = loja)
  }

}
