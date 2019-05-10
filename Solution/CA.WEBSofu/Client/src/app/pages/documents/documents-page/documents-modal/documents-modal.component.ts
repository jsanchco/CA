import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-documents-modal',
  templateUrl: './documents-modal.component.html',
  styleUrls: ['./documents-modal.component.scss']
})

export class DocumentsModalComponent implements OnInit {

  @ViewChild('Dialog')
    public Dialog: DialogComponent;
    public dlgButtons: Object[];
    public target = '.control-section';

    public header = 'Upload File';
    public showCloseIcon: Boolean = true;
    public width = '50%';
    public animationSettings: Object = { effect: 'None' };
    public hide: any;

    constructor() { }

    ngOnInit() {
        this.dlgButtons = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Learn More', isPrimary: true } }];
    }

    // On Dialog close, 'Open' Button will be shown
    public dialogClose: EmitType<object> = () => {

    }
    // On Dialog open, 'Open' Button will be hidden
    public dialogOpen: EmitType<object> = () => {

    }

    public dlgBtnClick: EmitType<object> = () => {
        window.open('https://www.syncfusion.com/company/about-us');
    }

    openModal(): void {
        this.Dialog.show();
    }
}
