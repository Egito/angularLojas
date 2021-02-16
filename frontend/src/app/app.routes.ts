import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { LojasComponent } from './lojas/lojas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MenuComponent } from './pedidos/menu/menu.component';
import { ReviewsComponent } from './pedidos/reviews/reviews.component';
import { ComprasComponent } from './compras/compras.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'lojas', component: LojasComponent },
    { path: 'lojas/:id', component: PedidosComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    { path: 'compras', component: ComprasComponent }
    
]
