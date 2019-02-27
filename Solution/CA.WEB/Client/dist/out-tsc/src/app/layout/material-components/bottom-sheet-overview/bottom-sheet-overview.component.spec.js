import { async, TestBed } from '@angular/core/testing';
import { BottomSheetOverviewComponent } from './bottom-sheet-overview.component';
describe('BottomSheetOverviewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BottomSheetOverviewComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BottomSheetOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bottom-sheet-overview.component.spec.js.map