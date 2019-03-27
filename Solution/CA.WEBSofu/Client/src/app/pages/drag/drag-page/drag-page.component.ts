import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-drag-page',
  templateUrl: './drag-page.component.html',
  styleUrls: ['./drag-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragPageComponent implements OnInit {

  // Model for lists
  links = [
    {name: 'Inbox'},
    {name: 'Outbox'},
    {name: 'Spam'},
    {name: 'Trash'}
  ];
  otherLinks = [
    {name: 'New'},
    {name: 'Archive'},
    {name: 'Favourite'},
    {name: 'Important'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
