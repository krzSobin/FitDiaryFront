import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { LoginModel } from "./index";

@Injectable()
export class AuthService {
    public token: string;
    public currentUser: any;

    constructor(private _http: Http) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }

    loginUser(loginModel: LoginModel) {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({ headers: headers });
        let params = new URLSearchParams();
        params.set('UserName', loginModel.UserName);
        params.set('Password', loginModel.Password);
        params.set('grant_type', 'password');

        let body = params.toString();
        console.log(body);

        return this._http.post('http://localhost:55986/token', body, options)
            .do(resp => {
                if (resp) {
                    let name = <string>resp.json().userName;
                    let accessToken = <string>resp.json().access_token;

                    localStorage.setItem('currentUser', JSON.stringify({ username: name, token: accessToken }));

                    return resp;
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
        //console.log(JSON.parse(localStorage.getItem('currentUser')));
        //console.log("blaaa " + !this.token);
        return !!this.token;
    }
}