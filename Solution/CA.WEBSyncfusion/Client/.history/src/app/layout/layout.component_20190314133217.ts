import { Component, ViewEncapsulation, Inject, ViewChild, OnInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';
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
      { text: 'Dashboard' },
      { text: 'Users' }
  ];
  public fields: Object = { tooltip: 'text' };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // // open new tab
  // newTabClick(): void {
  //   console.log('newTabClick');
  //   document.getElementById('newTab').setAttribute('href', location.href.split('#')[0] + 'sidebar/sidebar-list/index.html');
  // }
  // Listview select event handler
  onSelect(args: SelectEventArgs) {
    console.log('onSelect: ' + args.text);
    this.sidebarInstance.hide();
    switch (args.text) {
      case 'Dashboard':
      this.router.navigate(['/dashboard']);
        break;
      case 'Users':
        this.router.navigate(['/users']);
        break;

      default:
        break;
    }
    // document.getElementsByClassName('textArea')[0].innerHTML = args.text + ' Page Content';
  }

  openClick() {
    this.sidebarInstance.show();
  }
  closeClick() {
    this.sidebarInstance.hide();
  }
}
