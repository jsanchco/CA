import { async, TestBed } from '@angular/core/testing';
import { MaterialComponentsComponent } from './material-components.component';
describe('MaterialComponentsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MaterialComponentsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MaterialComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=material-components.component.spec.js.map