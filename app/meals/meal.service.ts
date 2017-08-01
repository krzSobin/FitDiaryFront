import { Injectable } from '@angular/core';

import { IMeal } from './meal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { MealNewDto } from "./create/meal-new.dto";

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

    add(meal: MealNewDto): Observable<URL> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        console.log(meal.Date);
        let token = this.getToken();
        if (token != null) {
            headers.append('Authorization',token);
        }

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

    private getToken(): string {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let result = 'Bearer ' + currentUser.token;
            return result;
        }

        return null;
    }
}