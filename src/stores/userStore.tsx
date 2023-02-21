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
    role: Role[] = [];
    users: User[] = [];
    birthdays: User[] = [];

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

   setRole = async () => {
    const userRoles = await agent.account.role();
    this.role = [...userRoles];
}


getAllUsers = async () => {
    try {
        const users = await agent.account.getAllUsers();
        runInAction(() => {
            if(users === null) {
                return null;
            }
            this.users = [...users];
        })
    } catch(error) {
        throw error;
    }


}

   getUser = async () => {
    try {
        const user = await agent.account.current();
        runInAction(() => this.user = user);
    } catch (error) {
        console.log(error);
    }
   }

   birthday = async () => {
    try {
        const bday = await agent.account.birthday();

        runInAction(() => {

            this.birthdays = [...bday];
        })
    } catch(err) {
        throw new Error("Something went wrong loading birthdays");
    }
}

}

export default new userStore();