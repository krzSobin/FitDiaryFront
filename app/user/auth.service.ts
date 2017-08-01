import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
    public token: string;
    public currentUser: any;

    constructor(private _http: Http) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }

    loginUser(userName: string, password: string) {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({ headers: headers });
        let params = new URLSearchParams();
        params.set('Username', userName);
        params.set('Password', password);
        params.set('grant_type', 'password');

        let body = params.toString();

        return this._http.post('http://localhost:55986/token', body, options)
            .do(resp => {
                if (resp) {
                    let name = <string>resp.json().userName;
                    let accessToken = <string>resp.json().access_token;

                    localStorage.setItem('currentUser', JSON.stringify({ username: name, token: accessToken }));
                }
            }).catch(error => {
                console.log(error);
                return Observable.of(false);
            })
    }

    logoutUser() {
        localStorage.removeItem('currentUser');
        console.log(this.token);
    }

    isAuthenticated() {
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        console.log("blaaa " + !this.token);
        return !!this.token;
    }
}