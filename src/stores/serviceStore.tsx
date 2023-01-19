import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Service } from "../interfaces/Service";

class serviceStore {

    servicesArray: Service[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    services = async () => {
        try {
            const service = await agent.products.list();

            runInAction(() => {
                if(service === null) {
                    return null;
                }
                this.servicesArray = [...service];
            })
        } catch(err) {
            throw new Error("Something went wrong loading services");
        }
    }
}

export default new serviceStore();