import {TestBed, async} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from './service/app.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
    let fixture, app, nativeElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [TranslateService, AppService, HttpClient],
            imports: [TranslateModule.forRoot(), HttpClientModule]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent); // create Component
        app = fixture.debugElement.componentInstance; // to access properties and methods
        nativeElement = fixture.debugElement.nativeElement; // to access DOM element
    }));
    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));
    it('should change lang', async(() => {
        const el = fixture.debugElement.query(By.css('.change')).nativeElement.click();
        fixture.detectChanges();
        expect(app.lang).toEqual('es');
    }));
    // it('should get success Object', async(() => {
    //     expect(app.get()).toBe(Object);
    // }));

});
