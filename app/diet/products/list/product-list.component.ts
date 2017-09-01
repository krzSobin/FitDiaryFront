import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/diet/products/list/product-list.component.html',
    styleUrls: ['app/diet/products/list/product-list.component.css']
})
export class ProductListComponent implements OnInit {

    isGrid: boolean = true;

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    showGrid(): void {
        this.isGrid = true;
    }

    showList(): void {
        this.isGrid = false;
    }

    ngOnInit(): void {
        this._productService.getProducts(undefined)
            .subscribe(products => this.products = products,
                        error => this.errorMessage = <any>error);
    }
}