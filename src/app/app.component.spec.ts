import {TestBed, async} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';

describe('AppComponent', () => {
    let fixture, app, nativeElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [TranslateService],
            imports: [TranslateModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent); // create Component
        app = fixture.debugElement.componentInstance; // to access properties and methods
        nativeElement = fixture.debugElement.nativeElement; // to access DOM element
    }));
    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        expect(app.title).toEqual('app');
    }));
    it(`should have as subtitle 'hello'`, async(() => {
        expect(app.subtitle).toEqual('hello');
    }));
    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        expect(nativeElement.querySelector('h1').textContent).toContain('HELLO');
    }));
    it('should change lang', async(() => {
        const el = fixture.debugElement.query(By.css('.change')).nativeElement.click();
        fixture.detectChanges();
        expect(app.lang).toEqual('es');
    }));

});
