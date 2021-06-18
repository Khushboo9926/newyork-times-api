import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  scienceList: Array<any> = [];
  constructor(private activeRoute: ActivatedRoute, private searchService:SearchService, private route:Router) { }

  ngOnInit(): void {

    this.searchService.returnscience().subscribe((res: any) => {
      //console.log(this.c)
      // this.route.navigate([""]);
      console.log(res);
      const x = res.json;
      this.scienceList = res.results;
  
     // this.res = res
  
     console.log(this.scienceList);
     this.route.navigate(["science"]);
    })
  
  }
  }



