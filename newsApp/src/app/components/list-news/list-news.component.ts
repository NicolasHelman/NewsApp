import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  // recibimos datos de un componente
  @Input() listNoticias: any;

  constructor() { }

  ngOnInit(): void {
  }

}
