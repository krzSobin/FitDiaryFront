import { ProductInSearcherDto } from "../create/product-searcher/product-in-searcher.dto";

export class ProductInMealDto {
    productId: number;
    amountInGrams: number;
 
    name: string;
    category: string;
    totalProteins: number;
    totalFat: number;
    totalCarbo: number;
    totalSugar: number;
    totalKCal: number;

    constructor(product: ProductInSearcherDto) {
        this.productId = product.id;
        this.amountInGrams = product.amountInGrams;
        this.name = product.name;
        this.category = product.category;

        this.totalProteins = product.proteinsPer100g * this.amountInGrams / 100;
        this.totalFat = product.fatsPer100g * this.amountInGrams / 100;
        this.totalCarbo = product.carboPer100g * this.amountInGrams / 100;
        this.totalSugar = product.sugarPer100g * this.amountInGrams / 100;
        this.totalKCal = product.kCalPer100g * this.amountInGrams / 100;
    }
}
