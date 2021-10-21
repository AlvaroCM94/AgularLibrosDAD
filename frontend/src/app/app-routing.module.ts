import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ConfiguracionComponent } from './views/configuracion/configuracion.component';
import { ConocenosComponent } from './views/conocenos/conocenos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { PedidosCanceladosComponent } from './views/pedidos-cancelados/pedidos-cancelados.component';
import { PedidosHechosComponent } from './views/pedidos-hechos/pedidos-hechos.component';
import { UsuarioComponent } from './views/usuario/usuario.component';

const routes: Routes = [
  { path: '',      component: InicioComponent },
  { path: 'Inicio',      component: InicioComponent },
  { path: 'Conocenos',      component: ConocenosComponent },
  { path: 'Contacto',      component: ContactoComponent },
  { path: 'Login',      component: LoginComponent },
  { path: 'Usuario',      component: UsuarioComponent },
  { path: 'Hechos',      component:  PedidosHechosComponent},
  { path: 'Cancelados',      component:  PedidosCanceladosComponent},
  { path: 'Configuracion',      component: ConfiguracionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

