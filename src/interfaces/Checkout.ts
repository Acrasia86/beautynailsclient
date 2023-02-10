import { Service } from "./Service";

export interface Checkout {
    id?: string;
    productId?: number;
    bookedDate?: string;
    address: string;
    zipCode: string;
    phoneNumber: string;
}