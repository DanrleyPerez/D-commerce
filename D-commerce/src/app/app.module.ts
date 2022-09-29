import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelProdutosComponent } from './painel-produtos/painel-produtos.component';
import { FiltroProdutosComponent } from './filtro-produtos/filtro-produtos.component';
import { GerenciamentoProdutoComponent } from './gerenciamento-produto/gerenciamento-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelProdutosComponent,
    FiltroProdutosComponent,
    GerenciamentoProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
