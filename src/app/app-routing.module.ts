import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CriarPessoaComponent } from './pages/pessoa/criar-pessoa/criar-pessoa.component';

const routes: Routes = [ 
  { path: "home", component: HomeComponent },
  { path: "pessoa/criar", component: CriarPessoaComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
