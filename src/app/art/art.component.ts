import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  artList: Array<any> = [];
  constructor(private activeRoute: ActivatedRoute, private searchService:SearchService, private route:Router) { }

  ngOnInit(): void {

    this.searchService.returnart().subscribe((res: any) => {
      //console.log(this.c)
      // this.route.navigate([""]);
      console.log(res);
      const x = res.json;
      this.artList = res.results;
  
     // this.res = res
  
     console.log(this.artList);
     this.route.navigate(["art"]);
    })
  
  }
  }


