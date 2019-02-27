import { fakeAsync, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
describe('NavComponent', function () {
    var component;
    var fixture;
    beforeEach(fakeAsync(function () {
        TestBed.configureTestingModule({
            declarations: [NavComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nav.component.spec.js.map