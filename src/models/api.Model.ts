export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    Dimensions: {
        warrantyInformation: string;
        shippingInformation: string;
        availabilityStatus: string;
    }
    reviews: {
        returnPolicy: string;
        minimumOrderQuantity: number;
    }
    meta: {
        images: string[];
        thumbnail: string;
    }
}

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

interface Reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
