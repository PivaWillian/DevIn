import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
  movies = [{
    nome: 'Titanic',
    duracao: 3,
  },
  {
    nome: 'Forest Gump',
    duracao: 2,
  },
  {
    nome: 'Titanic',
    duracao: 3,
  }];
}
