import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorPageComponent implements OnInit {
  // Model for editor
  model;

  constructor() { }

  ngOnInit() {
  }

}
