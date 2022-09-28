import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getNoticias(parametros: any): Observable<any> {

    const URL = 
      'https://newsapi.org/v2/top-headlines?country='
      + parametros.pais 
      + '&category=' 
      + parametros.categoria 
      + '&apiKey=01485feeb3814cbfa6476cc70408f437'
    ;

    return this.http.get(URL);

  }
  
}