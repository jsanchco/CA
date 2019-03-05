import { async, TestBed } from '@angular/core/testing';
import { AutoCompleteComponent } from './auto-complete.component';
describe('AutoCompleteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AutoCompleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AutoCompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auto-complete.component.spec.js.map