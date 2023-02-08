import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Service } from "../interfaces/Service";

class serviceStore {

    servicesArray: Service[] = [];
    serviceObj: Service | undefined = undefined;

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

    removeService = async (id: number) => {
        try {
            await agent.products.delete(id);
            if(!id) {
                return new Error('No service id found')
            }
            runInAction(() => {
                this.servicesArray = [...this.servicesArray.filter(x => x.id !== id)]
            })
        } catch(err) {
            console.log(err);
        }
    }

    updateService = async (service: Service) => {
        try {
            let updateService = await agent.products.update(service);

            runInAction(() => {
                 return updateService
            })
        
        } catch(error) {
            return new Error('Something went wrong updating service');
        }
    }

    setServiceObj = (serviceObj: {   id: number;
        productName: string;
        productDescription: string;
        timeToFinnish: string;
        imageUrl: string;
        price: number;}) => {
        this.serviceObj = serviceObj;
    }

    selectService = (id: number) => {
        this.serviceObj = this.servicesArray.find(x => x.id === id);
    }
}

export default new serviceStore();