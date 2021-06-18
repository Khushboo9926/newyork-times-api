import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchData:Array<any> = [];
  httpClient: any;
  
  
  constructor(private http:HttpClient) { }

  ssearch(query:any){
    console.log(query)
    const res = this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query.searchresult}&api-key=IdHIe0L4h7IF72ImTfx4csvC8ly7VuAO`)
    //console.log(res)
    return res
  }

  
  returnworld(){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=IdHIe0L4h7IF72ImTfx4csvC8ly7VuAO`)
  }

  returnart(){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=IdHIe0L4h7IF72ImTfx4csvC8ly7VuAO`)
  }

  returnhome(){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=IdHIe0L4h7IF72ImTfx4csvC8ly7VuAO`)
  }

  returnscience(){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=IdHIe0L4h7IF72ImTfx4csvC8ly7VuAO`)
  }
  returnus(){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=IdHIe0L4h7IF72ImTfx4csvC8ly7VuAO`)
  }
  

 

}