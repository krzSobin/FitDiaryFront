import { ProductInMealDto } from "../productInMeal/product-in-meal.dto";

export class MealNewDto {
    Date: Date;
    name: string;
    UserId: number;
    Products: Array<ProductInMealDto>;

    constructor() {
        this.Products = new Array<ProductInMealDto>();
    }

    getTotalProtein() {
        let result = 0;
        for (let product of this.Products) {
            result += product.totalProteins;
        }

        return result;
    }

    getTotalFat() {
        let result = 0;
        for (let product of this.Products) {
            result += product.totalFat;
        }

        return result;
    }

    getTotalCarbo() {
        let result = 0;
        for (let product of this.Products) {
            result += product.totalCarbo;
        }

        return result;
    }

    getTotalSugar() {
        let result = 0;
        for (let product of this.Products) {
            result += product.totalSugar;
        }

        return result;
    }

    getTotalKCal() {
        let result = 0;
        for (let product of this.Products) {
            result += product.totalKCal;
        }

        return result;
    }
}
