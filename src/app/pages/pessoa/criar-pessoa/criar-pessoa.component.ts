import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  form: FormGroup;
  tiposContato: Dominio[] = [];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.carregarTiposContato();


    this.form = this.fb.group({
      nome: "",
      dataNascimento: "",
      contatos: this.fb.array([])
    });

  }

  get contatos() {
    return this.form.controls["contatos"] as FormArray;
  }

 
  carregarTiposContato() {

    this.tiposContato.push({
      chave: "Pessoa.TipoContato",
      nome: "Whatsapp",
      valor: "1" 
    });

    this.tiposContato.push({
      chave: "Pessoa.TipoContato",
      nome: "Telefone Fixo",
      valor: "2" 
    });
    
    this.tiposContato.push({
      chave: "Pessoa.TipoContato",
      nome: "Telefone Celular",
      valor: "3" 
    });
    
    this.tiposContato.push({
      chave: "Pessoa.TipoContato",
      nome: "Email",
      valor: "4" 
    });

  }

  gravar() {

    console.log(this.form.value);
    

  }

  adicionarContato() {

    const contatoForm = this.fb.group({
      tipoContato: ["", Validators.required],
      valorContato: ["", Validators.required]      
    });

    this.contatos.push(contatoForm);    

  }

  removerContato(contatoIndex: number) {
    this.contatos.removeAt(contatoIndex);
  }

}

export interface Dominio {

  chave: string;
  nome: string;
  valor: string;

}
