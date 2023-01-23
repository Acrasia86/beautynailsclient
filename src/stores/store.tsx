import { makeAutoObservable, reaction, runInAction } from "mobx";

class store {

    token: string | null = localStorage.getItem('jwt');
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.token,
            token => {
                if(token) {
                    localStorage.setItem('jwt', token)
                } else {
                    localStorage.clear()
                }
            }
        )
    }

    setToken = (token: string | null) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

}

export default new store();