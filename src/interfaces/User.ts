export interface User {
    userName: string;
    displayName: string;
    token: string;
    image?: string;
    birthday?: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    displayName?: string;
    userName?: string;

}

export interface Role {
    email: string;
}
