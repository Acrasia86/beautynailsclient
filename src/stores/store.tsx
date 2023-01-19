import { makeAutoObservable, runInAction } from "mobx";

class store {

    token: string | null = localStorage.getItem('jwt');
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);
    }

    setToken = (token: string | null) => {
        if(token) localStorage.setItem('jwt', token);
        runInAction(() => {
            this.token = token;
        })
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

}

export default new store();