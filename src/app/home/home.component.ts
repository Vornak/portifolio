import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../Tecnologia';
import { Projeto } from '../Projeto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cores:string[] =  ['#5139ff', '#3985ff', '#39e8ff', '#b439ff'];

  ngOnInit() {
    this.gerarCor(this.cores.length)
  }
  gerarCor(max:any){
    for(let i = 0; i<max; i++){

        Math.floor(Math.random() * max)

    }
  }



  tecnologias: Tecnologia[] = [
    {nome:'Git', icon:'../../assets/git-icon.svg'},
    {nome:'JavaScript', icon:'../../assets/logo-javascript.svg'},
    {nome:'HTML', icon:'../../assets/html-1.svg'},
    {nome:'CSS', icon:'../../assets/css-3.svg'},
    {nome:'Python', icon:'../../assets/python-5.svg'},
    {nome:'Java', icon:'../../assets/java-14.svg'},
    {nome:'TypeScript', icon:'../../assets/typescript-2.svg'},
    {nome:'SQL Language', icon:'../../assets/database-icon.svg'},
  ]

  projetos: Projeto[] = [
    {nome:'projeto1', icon:'icone', link:'#' },
    {nome:'projeto1', icon:'icone', link:'#' },
    {nome:'projeto1', icon:'icone', link:'#' },

  ]



}

