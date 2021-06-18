import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  current:any;
  searchForm:any;
  worldList: Array<any> = [];
  
  constructor(private activeRoute: ActivatedRoute, private searchService:SearchService, private route:Router) {
    this.current = activeRoute.snapshot.params.query ;
   // this.res = new Array<any>()
   }

  ngOnInit(): void {
   
    this.searchService.returnworld().subscribe((res: any) => {
      //console.log(this.c)
      // this.route.navigate([""]);
      console.log(res);
      const x = res.json;
      this.worldList = res.results;
  
     // this.res = res
  
     console.log(this.worldList);
     this.route.navigate(["world"]);
    })
  
  }

  
}
