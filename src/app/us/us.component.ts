import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {
  usList: Array<any> = [];
  constructor(private activeRoute: ActivatedRoute, private searchService:SearchService, private route:Router) { }

  ngOnInit(): void {

    this.searchService.returnus().subscribe((res: any) => {
      //console.log(this.c)
      // this.route.navigate([""]);
      console.log(res);
      const x = res.json;
      this.usList = res.results;
  
     // this.res = res
  
     console.log(this.usList);
     this.route.navigate(["us"]);
    })
  
  }
  }


