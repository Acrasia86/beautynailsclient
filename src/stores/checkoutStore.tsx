import { makeAutoObservable, runInAction } from "mobx";
import { MutableRefObject, useRef } from "react";
import agent from "../api/agent";
import { Checkout } from "../interfaces/Checkout";
import { CheckoutService } from "../interfaces/CheckoutService";

class checkoutStore {
  checkout: {} = {};
  dateChosen: boolean = false;
  nextStepChosen: boolean = false;
  confirmChosen: boolean = false;
  checkoutService: any[] = [];
  checkouts: Checkout[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createCheckout = async (checkout: Checkout) => {
    try {
      await agent.checkout.create(checkout);
    } catch (error) {
      throw new Error("Something went wrong checking out");
    }
  };

  printCheckout = async (id: number) => {
    try {
      let myCheckout = await agent.checkout.details(id);
      runInAction(() => {
        this.checkout = myCheckout;
      });
      return myCheckout;
    } catch (err) {
      throw new Error("Something went wrong loading checkout details");
    }
  };

  checkOutServices = async () => {
    try {
      const checkout = await agent.checkout.checkoutService();

      runInAction(() => {
        if (checkout === null) {
          return null;
        }
        this.checkoutService = [...checkout];
      });
    } catch (err) {
      throw new Error("Something went wrong loading checkout services");
    }
  };

  allCheckouts = async () => {
    try {
      const checkouts = await agent.checkout.list();

      runInAction(() => {
        if (checkouts === null) {
          return null;
        }
        this.checkouts = [...checkouts];
      });
    } catch (err) {
      throw new Error("Something went wrong loading all checkouts");
    }
  };

  setDateChosen = (dateChosen: boolean) => {
    this.dateChosen = dateChosen;
  };

  setNextStepChosen = (nextStepChosen: boolean) => {
    this.nextStepChosen = nextStepChosen;
  };

  setConfirmChosen = (confirmChosen: boolean) => {
    this.confirmChosen = confirmChosen;
  };
}

export default new checkoutStore();
