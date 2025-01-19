export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Trenton modular sofa_3",
        price: "Rs. 55,000.00",
        image: "product1.png"
    },
    {
        id: 2,
        name: "Outdoor bar table and stool",
        price: "Rs. 65,000.00",
        image: "product2.png"
    },
    {
        id: 3,
        name: "Plain console with teak mirror",
        price: "Rs. 75,000.00",
        image: "product3.png"
    },
    {
        id: 4,
        name: "Mountain Adventure Pack",
        price: "Rs. 85,000.00",
        image: "product4.png"
    },
    {
        id: 5,
        name: "Luxury Standard Bed",
        price: "Rs, 30,000.00",
        image: "image32.png"

    },
    {
        id: 6,
        name: "Stand table",
        price: "Rs, 20,000.00",
        image: "image33.png"

    }
]