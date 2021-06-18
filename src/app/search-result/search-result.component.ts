import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input('abstract') abstract = ""
  @Input('lead_paragraph') lead_paragraph=""
  @Input('source') source = ""
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
