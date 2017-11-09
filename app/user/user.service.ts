import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user.model';
import { RegistrationModel } from "./register/registration.model";

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    getAll() {
        return this._http.get('/api/users', this.setToken()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this._http.get('http://localhost:55986/api/users/' + id, this.setToken()).map((response: Response) => response.json());
    }

    register(registrationModel: RegistrationModel) {
        return this._http.post('http://localhost:55986/api/account/register', registrationModel).map((response: Response) => response.json());
    }

    update(user: User) {
        return this._http.put('/api/users/' + user.id, user, this.setToken()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this._http.delete('http://localhost:55986/api/users/' + id, this.setToken()).map((response: Response) => response.json());
    }

    getUserData() {
        return this._http.get('http://localhost:55986/api/users/', this.setToken()).map((response: Response) => response.json());
    }

    // private helper methods

    private setToken() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}