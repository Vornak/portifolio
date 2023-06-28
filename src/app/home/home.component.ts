import { Component } from '@angular/core';
import { Tecnologia } from '../Tecnologia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tecnologias: Tecnologia[] = [
    {nome:'teste1', icon:'teste'},
    {nome:'teste2', icon:'teste'},
    {nome:'teste3', icon:'teste'},
    {nome:'teste4', icon:'teste'},
    {nome:'teste5', icon:'teste'},
    {nome:'teste6', icon:'teste'},
    {nome:'teste7', icon:'teste'},
    {nome:'teste8', icon:'teste'},
  ]
}
