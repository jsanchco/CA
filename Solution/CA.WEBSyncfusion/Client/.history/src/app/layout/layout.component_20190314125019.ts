import { Component, ViewEncapsulation, Inject, ViewChild, OnInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ListViewComponent, SelectEventArgs } from '@syncfusion/ej2-angular-lists';
import { enableRipple } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LayoutComponent implements OnInit {

  @ViewChild('sidebarInstance')
  public sidebarInstance: SidebarComponent;
  public width = '250px';
  public type = 'Over';
  public dataList: { [key: string]: Object }[] = [
      { text: 'Home' },
      { text: 'About' },
      { text: 'Careers' },
      { text: 'FAQs' },
      { text: 'Blog' },
      { text: 'Uses' },
      { text: 'Contact' }
  ];
  public fields: Object = { tooltip: 'text' };

  constructor() { }

  ngOnInit() {
  }

  // // open new tab
  // newTabClick(): void {
  //   console.log('newTabClick');
  //   document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'sidebar/sidebar-list/index.html');
  // }
  // Listview select event handler
  onSelect(args: SelectEventArgs) {
    console.log('onSelect');
    this.sidebarInstance.hide();
    document.getElementsByClassName('textArea')[0].innerHTML = args.text + ' Page Content';
  }

  openClick() {
    this.sidebarInstance.show();
  }
  closeClick() {
    this.sidebarInstance.hide();
  }
}
