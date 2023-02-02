export interface Checkout {
    id: number;
    productId: number;
    bookedDate: string;
    dailySum: number;
    monthlySum: number;
    address: string;
    zipCode: string;
    phoneNumber: string;
}