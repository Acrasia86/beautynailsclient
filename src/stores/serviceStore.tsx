import { throws } from "assert";
import { makeAutoObservable, runInAction } from "mobx";
import Swal from "sweetalert2";
import agent from "../api/agent";
import { CheckoutService } from "../interfaces/CheckoutService";
import { Service } from "../interfaces/Service";

class serviceStore {
  servicesArray: Service[] = [];
  serviceObj: Service | undefined = undefined;
  serviceChosen: boolean = false;
  service: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  services = async () => {
    try {
      const service = await agent.products.list();

      runInAction(() => {
        if (service === null) {
          return null;
        }
        this.servicesArray = [...service];
      });
    } catch (err) {
      throw new Error("Something went wrong loading services");
    }
  };

  createService = async (service: Service) => {
    try {
      await agent.products.create(service);
      this.services();
    } catch (error) {
      throw new Error("Something went wrong creating a new service");
    }
  };

  getServiceById = async (id: string) => {
    try {
      let serviceById = await agent.products.details(id);
      runInAction(() => {
        this.serviceObj = serviceById;
      });
      return serviceById;
    } catch (err) {
      throw new Error("Something went wrong loading service by id");
    }
  };

  removeService = async (id: string) => {
    try {
      let swalDelete = Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if ((await swalDelete).isConfirmed) {
        await agent.products.delete(id);
      }

      if (!id) {
        return new Error("No service id found");
      }
      runInAction(() => {
        this.servicesArray = [...this.servicesArray.filter((x) => x.id !== id)];
      });
    } catch (err) {
      console.log(err);
    }
  };

  updateService = async (service: Service) => {
    try {
      let updateService = await agent.products.update(service);
      this.services();
      runInAction(() => {
        return updateService;
      });
    } catch (error) {
      return new Error("Something went wrong updating service");
    }
  };

  selectService = (id: string) => {
    this.serviceObj = this.servicesArray.find((x) => x.id === id);
  };

  setServiceChosen = (serviceChosen: boolean) => {
    this.serviceChosen = serviceChosen;
  };

  setService = (service: string) => {
    this.service = service;
  };
}

export default new serviceStore();
