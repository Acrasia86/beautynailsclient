import { makeAutoObservable, runInAction } from "mobx";
import { MutableRefObject, useRef } from "react";
import agent from "../api/agent";
import { Checkout } from "../interfaces/Checkout";

class checkoutStore {

    checkout: Checkout | null = null;

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

}

export default new checkoutStore();