import { makeAutoObservable } from "mobx";
import { MutableRefObject, useRef } from "react";
import agent from "../api/agent";
import { Checkout } from "../interfaces/Checkout";

class checkoutStore {

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

}

export default new checkoutStore();