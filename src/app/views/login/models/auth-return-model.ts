import { ContextUser } from "./context-user-model";

export class AuthReturn {
    public token: string;
    public tokenType: string;
    public isAuthenticated: boolean;
    public user: ContextUser;

    constructor(data:any)
    {
        Object.assign(this,data);
    }
}