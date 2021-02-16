import { MenuItem } from "./menu-item.model";
import { CarrinhoItem } from "./carrinho.model";

export class CarrinhoService {
    itens: CarrinhoItem[] = []

    limpaItem(){
        this.itens = []
    }

    incluiItem(item: MenuItem){
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem){
            foundItem.qtd = foundItem.qtd + 1
        }else{
            this.itens.push(new CarrinhoItem(item))
        }
    }

    aumentaItem(item: CarrinhoItem){
        item.qtd = item.qtd + 1
    }

    diminuiItem(item: CarrinhoItem){
        item.qtd = item.qtd - 1
        if(!item.qtd) {
            this.apagaItem(item)
        }
    }

    apagaItem(item: CarrinhoItem){
        this.itens.splice(this.itens.indexOf(item), 1)
    }

    total(): number{
        return this.itens
            .map(item => item.valor())
            .reduce((prev, valor) => prev + valor, 0)
    }
}