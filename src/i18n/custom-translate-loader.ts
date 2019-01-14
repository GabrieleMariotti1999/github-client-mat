import { TranslateLoader } from '@ngx-translate/core';
import { en } from './en';
import { it } from './it';
import { Observable } from 'rxjs';
export class CustomTranslateLoader implements TranslateLoader {
    getTranslation(lang: String): Observable<any> {
        return Observable.create(observer => {
            if (lang === 'it') {
                observer.next(it);
            } else {
                observer.next(en);
            }
            observer.complete();
        });
    }
}
