import { async, TestBed } from '@angular/core/testing';
import { DialogOverviewComponent } from './dialog-overview.component';
describe('DialogOverviewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DialogOverviewComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DialogOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dialog-overview.component.spec.js.map