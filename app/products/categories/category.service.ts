import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ICategory } from './category';

@Injectable()
export class CategoryService {

    private _categoryUrl = 'http://localhost:55986/api/foodCategories/';

    constructor(private _http: Http) { }

    getCategories(): Observable<ICategory[]> {
        return this._http.get(this._categoryUrl)
            .map((response: Response) => <ICategory[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}