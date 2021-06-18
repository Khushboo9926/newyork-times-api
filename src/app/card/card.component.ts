import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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
