import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../reusavel/radio/radio.model';
import { ComprasService } from './compras.services';
import { CarrinhoItem } from '../pedidos/carrinho.model';

@Component({
  selector: 'mt-compras',
  templateUrl: './compras.component.html'
})
export class ComprasComponent implements OnInit {

  frete: number = 8.5

  opcoesPagamentos: RadioOption[] = [
    {label: 'Dinheiro', value: 'DIN'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'VRF'}
  ]

  constructor(private comprasService: ComprasService) { }

  ngOnInit() {
  }

  total(): number {
    return this.comprasService.total()
  }
  
  compraItems(){
    return this.comprasService.Itens()
  }

  aumentaItem(item: CarrinhoItem){
    this.comprasService.aumentaQtd (item)
  }

  diminuiItem(item: CarrinhoItem){
    this.comprasService.diminuiQtd (item)
  }

  removaItem(item: CarrinhoItem){
    this.comprasService.removeItem (item)
  }

}
