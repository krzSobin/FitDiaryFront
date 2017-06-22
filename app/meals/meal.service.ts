import { Injectable } from '@angular/core';

import { IMeal } from './meal';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MealService {

    private _mealUrl = 'http://localhost:55986/api/meals';

    constructor(private _http: Http) { }

    getMeals(): Observable<IMeal[]> {
        return this._http.get(this._mealUrl)
            .map((response: Response) => <IMeal[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}