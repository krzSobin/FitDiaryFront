import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { IUser } from './user.model';

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    getAll() {
        return this._http.get('/api/users', this.setToken()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this._http.get('/api/users/' + id, this.setToken()).map((response: Response) => response.json());
    }

    create(user: IUser) {
        return this._http.post('/api/users', user, this.setToken()).map((response: Response) => response.json());
    }

    update(user: IUser) {
        return this._http.put('/api/users/' + user.id, user, this.setToken()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this._http.delete('/api/users/' + id, this.setToken()).map((response: Response) => response.json());
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