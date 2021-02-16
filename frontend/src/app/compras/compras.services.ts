import { Injectable } from "@angular/core";
import { CarrinhoService } from "../pedidos/carrinho.service";
import { CarrinhoItem } from "../pedidos/carrinho.model";

@Injectable()
export class ComprasService {

    constructor(private comprasService: CarrinhoService) {}

    total(): number {
        return this.comprasService.total()
    }

    Itens(): CarrinhoItem[] {
        return this.comprasService.itens
    }

    aumentaQtd(item: CarrinhoItem){
        this.comprasService.aumentaItem(item)
    }

    diminuiQtd(item: CarrinhoItem){
        this.comprasService.diminuiItem(item)
    }

    removeItem(item: CarrinhoItem){
        this.comprasService.apagaItem(item)
    }
}