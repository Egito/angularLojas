import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoItem } from '../../pedidos/carrinho.model';

@Component({
  selector: 'mt-cmp-itens',
  templateUrl: './cmp-itens.component.html'
})
export class CmpItensComponent implements OnInit {

  @Input() itens: CarrinhoItem[]

  @Output() aumItem = new EventEmitter<CarrinhoItem>()
  @Output() dimItem = new EventEmitter<CarrinhoItem>()
  @Output() removeItem = new EventEmitter<CarrinhoItem>()

  constructor() { }

  ngOnInit() {
  }

  emitAumentaQtd(item: CarrinhoItem){
    this.aumItem.emit(item)
  }

  emitDiminuiQtd(item: CarrinhoItem){
    this.dimItem.emit(item)
  }

  emitRemoveItem(item: CarrinhoItem){
    this.removeItem.emit(item)
  }

}
