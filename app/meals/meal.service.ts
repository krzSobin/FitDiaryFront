import { Injectable } from '@angular/core';

import { IMeal } from './meal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IMealNewDto } from "./create/meal-new.dto";

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

    add(meal: IMealNewDto): Observable<URL> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._mealUrl, meal, options)
            .map((response: Response) => <URL>response.json())
            .do(data => console.log('Return URL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}