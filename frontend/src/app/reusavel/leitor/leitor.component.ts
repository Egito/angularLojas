import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-leitor-container',
  templateUrl: './leitor.component.html'
})
export class LeitorComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() erroMensagem: string

  input: any

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
    }
  }

  comSucesso(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  temErros(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }
}
