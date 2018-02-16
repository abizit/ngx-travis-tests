import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'})
};

@Injectable()
export class AppService {

    constructor(private _httpclient: HttpClient) {
    }

    login(username, password): Observable<any> {
        const params = new HttpParams()
            .set('username', username)
            .set('password', password);
        return this._httpclient.post('http://testadmin.quickinfo.dk/api/quickcoop/coop-auth.php?', params, {headers: httpOptions.headers});
    }

    get() {
        let headers = new HttpHeaders({'Content-Type': 'text/xml'});
        headers.set('Accept', 'text/xml');
        headers.set('Content-Type', 'text/xml');
        return this._httpclient.get('http://www.webservicex.net/periodictable.asmx?WSDL', {headers: headers, responseType: 'text'});
    }
}

