export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Trenton modular sofa_3",
        price: 50000,
        image: "product1.png"
    },
    {
        id: 2,
        name: "Outdoor bar table and stool",
        price:  6500000,
        image: "product2.png"
    },
    {
        id: 3,
        name: "Plain console with teak mirror",
        price:  75000 ,
        image: "product3.png"
    },
    {
        id: 4,
        name: "Mountain Adventure Pack",
        price: 85000,
        image: "product4.png"
    },
    {
        id: 5,
        name: "Luxury Standard Bed",
        price: 30000,
        image: "image32.png"

    },
    {
        id: 6,
        name: "Stand table",
        price: 20000,
        image: "image33.png"

    }
]