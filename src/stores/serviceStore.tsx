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

    // removeService = async (id: number) => {
    //     try {
    //         await agent.products.delete(id);
    //         if(!id) {
    //             return new Error('No id found')
    //         }
    //         runInAction(() => {
    //             this.employee = [...this.employee.filter(x => x.id !== id)]
    //         })
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }
}

export default new serviceStore();