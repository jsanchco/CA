import { async, TestBed } from '@angular/core/testing';
import { BottomSheetComponent } from './bottom-sheets.component';
describe('BottomSheetComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BottomSheetComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BottomSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bottom-sheets.component.spec.js.map