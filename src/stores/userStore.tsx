import { makeAutoObservable, runInAction } from "mobx";
import { useNavigate, Navigate, NavigateFunction } from "react-router-dom";
import agent from "../api/agent";

import { Role, User, UserFormValues } from "../interfaces/User";
import { router } from "../router/Routes";
import store from "./store";

class userStore {

    user: User | null = null;
    email: string = '';
    password: string = '';
    role: Role | null = null;

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
            router.navigate('/admin')
            console.log(user);
        } catch(error) {
            throw error;
        }
    }

   logout = () => {
    store.setToken(null);
    localStorage.removeItem('jwt');
    this.user = null;
    router.navigate('/')
   }

   getRole = async () => {
    const roles = await agent.account.role();
    runInAction(() => {
     this.role = roles;
    })

   }

}

export default new userStore();