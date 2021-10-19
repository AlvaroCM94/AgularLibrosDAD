import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ConocenosComponent } from './views/conocenos/conocenos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { LoginComponent } from './views/login/login.component';
import { PedidosHechosComponent } from './views/pedidos-hechos/pedidos-hechos.component';
import { PedidosCanceladosComponent } from './views/pedidos-cancelados/pedidos-cancelados.component';
import { ConfiguracionComponent } from './views/configuracion/configuracion.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
//import { EntradaComponent } from './views/inicio/entrada/entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConocenosComponent,
    ContactoComponent,
    LoginComponent,
    PedidosHechosComponent,
    PedidosCanceladosComponent,
    ConfiguracionComponent,
    InicioComponent,
    MenuUserComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
