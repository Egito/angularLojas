import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { LojasComponent } from './lojas/lojas.component';
import { LojaComponent } from './lojas/loja/loja.component'
import { PedidosComponent } from './pedidos/pedidos.component';
import { MenuComponent } from './pedidos/menu/menu.component';
import { CarrinhoComponent } from './pedidos/carrinho/carrinho.component';
import { MenuItemComponent } from './pedidos/menu-item/menu-item.component';
import { ReviewsComponent } from './pedidos/reviews/reviews.component';
import { ComprasComponent } from './compras/compras.component';
import { LeitorComponent } from './reusavel/leitor/leitor.component';
import { RadioComponent } from './reusavel/radio/radio.component';
import { CmpItensComponent } from './compras/cmp-itens/cmp-itens.component';


import { LojasService } from './lojas/lojas.services';
import { CarrinhoService } from './pedidos/carrinho.service';
import { ComprasService } from './compras/compras.services';
import { CmpTotaisComponent } from './compras/cmp-totais/cmp-totais.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    LojasComponent,
    LojaComponent,
    PedidosComponent,
    MenuComponent,
    CarrinhoComponent,
    MenuItemComponent,
    ReviewsComponent,
    ComprasComponent,
    LeitorComponent,
    RadioComponent,
    CmpItensComponent,
    CmpTotaisComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LojasService, 
              CarrinhoService, 
              ComprasService,
              {provide: LOCALE_ID, useValue: 'pr-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
