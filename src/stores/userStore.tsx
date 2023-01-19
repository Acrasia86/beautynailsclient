import { makeAutoObservable, runInAction } from "mobx";
import { useNavigate, Navigate, NavigateFunction } from "react-router-dom";
import agent from "../api/agent";

import { Role, User, UserFormValues } from "../interfaces/User";
import { router } from "../router/Routes";
import modalStore from "./modalStore";
import store from "./store";

class userStore {

    user: User | null = null;
    email: string = '';
    password: string = '';
    role: [] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn() {
        return !! this.user;
    }

    login = async(creds: UserFormValues) => {
        try {
            const user = await agent.account.login(creds);
            store.setToken(user.token);
            runInAction(() => this.user = user);
            router.navigate('/')
            modalStore.closeModal();
            console.log(user);
        } catch(error) {
            throw error;
        }
    }

   logout = () => {
    store.setToken(null);
    this.user = null;
    router.navigate('/')
   }

   register = async(creds: UserFormValues) => {
    try {
        const user = await agent.account.register(creds);
        store.setToken(user.token);
        runInAction(() => this.user = user);
        router.navigate('/')
        modalStore.closeModal();
        console.log(user);
    } catch(error) {
        throw error;
    }
}

   setRole = (role: []) => {
    this.role = [...role];
}

   getUser = async () => {
    try {
        const user = await agent.account.current();
        runInAction(() => this.user = user);
    } catch (error) {
        console.log(error);
    }
   }
}

export default new userStore();