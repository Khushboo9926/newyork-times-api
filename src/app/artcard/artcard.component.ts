import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artcard',
  templateUrl: './artcard.component.html',
  styleUrls: ['./artcard.component.css']
})
export class ArtcardComponent implements OnInit {
  @Input('section') section = ""
  @Input('title') title = ""
  @Input('date') date = ""
  @Input('abstract') abstract = ""
  @Input('byline') byline = ""
  @Input('src') src = ""
  @Input('href') href = ""
  constructor() { }

  ngOnInit(): void {
  }

}
