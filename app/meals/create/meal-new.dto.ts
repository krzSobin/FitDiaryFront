import { ProductInMealDto } from "../productInMeal/product-in-meal.dto";

export class MealNewDto {
    Date: Date;
    Name: string;
    UserId: number;
    Products: Array<ProductInMealDto>;

    constructor() {
        this.Products = new Array<ProductInMealDto>();
    }
}
