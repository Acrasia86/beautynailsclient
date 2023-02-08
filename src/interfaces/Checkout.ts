export interface Checkout {
    id?: string;
    productId?: number;
    bookedDate?: string;
    dailySum?: number;
    monthlySum?: number;
    address?: string;
    zipCode?: string;
    phoneNumber?: string;
}