import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input()
  rating: number = 0;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');

  }

  ngOnInit() {
    console.log('ngOninit');

    this.rating = 0;
  }

  rate(){
    console.log('Rating');

    this.ratingClicked.emit(`Rating: ${this.rating}`);
  }

}
