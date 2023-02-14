import { Checkout } from "./Checkout";
import { Service } from "./Service";

export interface CheckoutService {
    checkout: Checkout;
    service: Service;
}