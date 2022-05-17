import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CriarPessoaComponent } from './pessoa/criar-pessoa/criar-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    HomeComponent,
    CriarPessoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    HomeComponent,
    CriarPessoaComponent
  ]
})
export class PagesModule { 
 
}
