import { Injectable } from '@angular/core';

import { IProduct } from './product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { NewProductDto } from "./create/new-product.dto";

@Injectable()
export class ProductService {

    private _productUrl = 'http://localhost:55986/api/foodproducts/';

    constructor(private _http: Http) { }

    getProducts(categoryId: number): Observable<IProduct[]> {
        return this._http.get(this._productUrl, categoryId)
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

    addProduct(product: NewProductDto): Observable<URL> {
        let headers = new Headers({
            'Content-Type':'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._productUrl, product, options)
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

    deleteProduct(id: number): Observable<IProduct> {
        return this._http.delete(this._productUrl + id)
            .map((response: Response) => <IProduct>response.json())
            .do(data => console.log('Deleted product: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}