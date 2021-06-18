import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeList: Array<any> = [];
  constructor(private activeRoute: ActivatedRoute, private searchService:SearchService, private route:Router) { }

  ngOnInit(): void {

    this.searchService.returnhome().subscribe((res: any) => {
      //console.log(this.c)
      // this.route.navigate([""]);
      console.log(res);
      const x = res.json;
      this.homeList = res.results;
  
     // this.res = res
  
     console.log(this.homeList);
     this.route.navigate([""]);
    })
  
  }
  }


