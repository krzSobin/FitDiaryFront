import { IProduct } from "../../products/index";

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

    constructor(product: IProduct, amountInGrams: number) {
        this.productId = product.Id;
        this.amountInGrams = amountInGrams;
        this.name = product.Name;
        this.category = product.Category;

        this.totalProteins = product.ProteinsPer100g * amountInGrams / 100;
        this.totalFat = product.FatsPer100g * amountInGrams / 100;
        this.totalCarbo = product.CarboPer100g * amountInGrams / 100;
        this.totalSugar = product.SugarPer100g * amountInGrams / 100;
        this.totalKCal = product.KCalPer100g * amountInGrams / 100;
    }
}
