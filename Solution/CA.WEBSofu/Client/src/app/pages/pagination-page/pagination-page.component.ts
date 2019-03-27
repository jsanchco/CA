import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.scss']
})
export class PaginationPageComponent implements OnInit {

  // Model for basic pagination example
  basicPage = 4;
  // Model for advances pagination example
  advancedPage = 1;
  // Model for size pagination example
  sizePage = 3;
  // Model for disabled pagination example
  disabledPage = 3;
  isDisabled = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

}
