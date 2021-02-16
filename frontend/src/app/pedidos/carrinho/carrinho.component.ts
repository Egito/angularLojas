import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  itens(): any[] {
    return this.carrinhoService.itens
  }

  clear(){
    this.carrinhoService.limpaItem()
  }

  removeItem(item: any){
    this.carrinhoService.apagaItem(item)
  }

  incluiItem(item: any){
    this.carrinhoService.incluiItem(item)
  }

  total(): number{
    return this.carrinhoService.total()
  }
}
