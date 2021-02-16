import { MenuItem } from "./menu-item.model";

export class CarrinhoItem {
    constructor (public menuItem: MenuItem,
                 public qtd: number = 1,
                ){ }

    valor(): number{
        return this.menuItem.price * this.qtd
    }
}