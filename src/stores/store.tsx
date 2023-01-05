import { makeAutoObservable } from "mobx";

class store {

    token: string | null = null;
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);
    }

    setToken = (token: string | null) => {
        if(token) localStorage.setItem('jwt', token);
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

}

export default new store();