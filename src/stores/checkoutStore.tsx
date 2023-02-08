import { makeAutoObservable, runInAction } from "mobx";
import { MutableRefObject, useRef } from "react";
import agent from "../api/agent";
import { Checkout } from "../interfaces/Checkout";

class checkoutStore {

    checkout: {} = {};

    constructor() {
        makeAutoObservable(this);
    }

    createCheckout = async (checkout: Checkout) => {
        try {
            
            await agent.checkout.create(checkout)
        } catch (error) {
            throw new Error("Something went wrong checking out");
        }
    }

    printCheckout = async (id: number) => {
        
        try {
          let myCheckout = await agent.checkout.details(id);
            runInAction(() => {
                this.checkout = myCheckout;
            })
            return myCheckout;
        } catch(err) {
            throw new Error("Something went wrong loading checkout details");

        }    
}
    setCheckOut = (checkout: {  id: string;
        productId?: number;
        bookedDate?: string;
        dailySum?: number;
        monthlySum?: number;
        address?: string;
        zipCode?: string;
        phoneNumber?: string;}) => {
        this.checkout = checkout;
    }

}

export default new checkoutStore();