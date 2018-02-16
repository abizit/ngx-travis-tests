import {TestBed, inject} from '@angular/core/testing';

import {AppService} from './app.service';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('AppService', () => {
    let service;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let headers: HttpHeaders;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AppService]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'});
    });
    beforeEach(inject([AppService], (s) => {
        service = s;
    }));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should Login', () => {
        let data = {
            'code': 0,
            'description': 'Success',
            'success': true,
            'user_type': 1,
            'access_token': '',
            'expiration': 1523864078,
            'status': 200
        };

        // const params = new HttpParams()
        //     .set('username', '1910')
        //     .set('password', '1234');
        //
        // httpClient.post('http://testadmin.quickinfo.dk/api/quickcoop/coop-auth.php?', params, {headers: headers}).subscribe(
        //     res => expect(res).toEqual(data)
        // );
        // const req = httpTestingController.expectOne('http://testadmin.quickinfo.dk/api/quickcoop/coop-auth.php?');
        // expect(req.request.method).toEqual('POST');
        // req.flush(data);
        // httpTestingController.verify();

        service.login('1910', ',1234').subscribe(
            res => expect(res).toEqual(data)
        );
    });

    it('should fail as wrong password', () => {
        const error = {'code': -82, 'description': 'Wrong password', 'success': false, 'status': 401};

        // const params = new HttpParams()
        //     .set('username', '1910')
        //     .set('password', '1234');
        //
        // httpClient.post('http://testadmin.quickinfo.dk/api/quickcoop/coop-auth.php?', params, {headers: headers}).subscribe(
        //     res => fail('should faile'),
        //     (error: HttpErrorResponse) => {
        //         expect(error).toEqual(error);
        //     }
        // );
        // const req = httpTestingController.expectOne('http://testadmin.quickinfo.dk/api/quickcoop/coop-auth.php?');
        // req.flush(error, {status: 401, statusText: 'Wrong Password'});
        service.login('1910', '11').subscribe(
            () => fail('should Fail'),
            (err) => expect(err).toEqual(error)
        );

    });

    it('should return text/XML data',()=>{
       service.get().subscribe(
           res => expect(typeof res).toEqual('string')
       )
    })
});
