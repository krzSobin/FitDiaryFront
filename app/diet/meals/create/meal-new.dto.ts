import { ProductInMealDto } from "../productInMeal/product-in-meal.dto";

export class MealNewDto {
    Date: Object;
    name: string;
    Products: Array<ProductInMealDto>;

    constructor() {
        this.Products = new Array<ProductInMealDto>();
        this.Date = new Date();
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
