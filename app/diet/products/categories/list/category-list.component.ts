import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ICategory } from '../category';
import { CategoryService } from '../category.service';

@Component({
    selector: 'category-list',
    templateUrl: 'app/diet/products/categories/list/category-list.component.html'
})
export class CategoryListComponent implements OnInit {
    categories: ICategory[];
    errorMessage: string;
    @Output() onSelected = new EventEmitter<ICategory>();

    constructor(private _categoryService: CategoryService) {
        this.categories = [];
    }

    ngOnInit(): void {
        this._categoryService.getCategories()
            .subscribe(categories => this.categories = categories,
            error => this.errorMessage = <any>error);
    }

    selectCategory(category: ICategory): void {
        console.log("wybrano" + category)
        this.onSelected.emit(category);
    }
}