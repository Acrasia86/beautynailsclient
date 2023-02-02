import { makeAutoObservable } from "mobx";
import { MutableRefObject } from "react";
import agent from "../api/agent";
import { Checkout } from "../interfaces/Checkout";

class checkoutStore {

    scrollToPage: MutableRefObject<null> | null = null;

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

    setScrollToPage = (scrollToPage: MutableRefObject<null> | null) => {
        this.scrollToPage = scrollToPage;
    }
    
}

export default new checkoutStore();