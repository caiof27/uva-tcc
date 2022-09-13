import { ProductPostController } from "../../presentation/controllers/product/product-post";
import { Controller } from "../../presentation/protocols";

export const makeProductPostController = (): Controller =>{
    return new ProductPostController();
}