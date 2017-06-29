import { Injectable } from '@angular/core';

import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    private _productUrl = 'http://localhost:55986/api/foodproducts/';

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id : number): Observable<IProduct> {
        return this._http.get(this._productUrl + id )
            .map((response: Response) => <IProduct>response.json())
            .do(data => console.log('Product: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    addProduct(product : IProduct): Observable<URL> {
        return this._http.post(this._productUrl, product)
            .map((response: Response) => <URL>response.json())
            .do(data => console.log('Return URL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    editProduct(product: IProduct): Observable<URL> {
        return this._http.put(this._productUrl, product)
            .map((response: Response) => <URL>response.json())
            .do(data => console.log('Return URL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}