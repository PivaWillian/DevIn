import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  seriesList = [
    { id: '1', nome: 'Breaking Bad' },
    { id: '2', nome: 'The Walking Dead' },
    {id: '3', nome: 'Friends'}
]
  tratarEvento(event: any){
    console.log(event)
  }
}