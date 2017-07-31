import { IProduct } from "../../../products/index";

export class ProductInSearcherDto {
    amountInGrams: number;
    id: number;
    name: string;
    proteinsPer100g: number;
    fatsPer100g: number;
    carboPer100g: number;
    sugarPer100g: number;
    kCalPer100g: number;
    category: string;
    
    constructor(product: IProduct) {
        this.id = product.Id;
        this.name = product.Name;
        this.proteinsPer100g = product.ProteinsPer100g;
        this.fatsPer100g = product.FatsPer100g;
        this.carboPer100g = product.CarboPer100g;
        this.sugarPer100g = product.SugarPer100g;
        this.kCalPer100g = product.KCalPer100g;
        this.category = product.Category;
    }
}