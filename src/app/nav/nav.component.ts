import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';
//import { JSONPlaceholderServices} from './services/JSONPlaceholderServices';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  searchForm:any;
  current:any;
  currentSearchData:any  ;
  searchList: Array<any> = [];
 


  //res:Array<any>
 
  
  constructor(private activeRoute: ActivatedRoute, private searchService:SearchService, private route:Router) {
    this.current = activeRoute.snapshot.params.query ;
   // this.res = new Array<any>()
   }

  ngOnInit(): void {
   
    this.searchForm = this.fb.group({
      "searchresult":this.fb.control("")    

  })

  // this.searchService.returnSearch(this.current).subscribe((res)=>{
  //   this.currentSearchData = res ;
   
   
  //})

  
}


submitForm(){
  this.searchService.ssearch(this.searchForm.value).subscribe((res:any) =>{
    //console.log(this.c)
    // this.route.navigate([""]);
    console.log(res);
    const x = res.json;
    this.searchList = res.response.docs;

   // this.res = res

   console.log(this.searchList);
   this.route.navigate(["searchresult"]);
  })

}





}
