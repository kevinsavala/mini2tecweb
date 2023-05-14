import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/cartelera', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  //{ path: 'alimentos', component: AlimentosComponent },
  //{ path: 'ubicanos', component: UbicanosComponent },
  //{ path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
