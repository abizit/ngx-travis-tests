import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    subtitle = 'hello';
    lang = 'en';

    constructor(public translate: TranslateService) {
// this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        translate.onLangChange.subscribe(
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
}
