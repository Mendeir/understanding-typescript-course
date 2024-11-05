import "reflect-metadata";
import { plainToInstance } from "class-transformer";

import { Product } from "./product.model";

const products = [
    { title: "A Carpet", price: 29.99 },
    { title: "A Book", price: 10.99 },
];

const loadedProducts = plainToInstance(Product, products);

for (const product of loadedProducts) {
    console.log(product.getInformation());
}

