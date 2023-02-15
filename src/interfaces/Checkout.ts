import { Service } from "./Service";

export interface Checkout {
    id?: string;
    productId?: string;
    bookedDate?: string;
    address: string;
    zipCode: string;
    phoneNumber: string;
}