import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from './service/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AppService]
})
export class AppComponent {
    title = 'app';
    subtitle = 'hello';
    lang = 'en';

    constructor(public translate: TranslateService,
                private _apiService: AppService) {
// this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // translate.onLangChange.subscribe(
        //     res => console.log(res)
        // );
        this._apiService.login('1910','1234').subscribe(
            res => console.log(res)
        );
    }

    setsubtitle() {
        this.title = this.subtitle;
    }

    changelang() {
        this.lang = this.lang === 'en' ? 'es' : 'en';
        this.translate.use(this.lang);
    }

    get(value) {
        this._apiService.get().subscribe(
            res => console.log(typeof res),
            err=> console.log(err)
        )
        // return this._apiService.test(value);
    }
}
