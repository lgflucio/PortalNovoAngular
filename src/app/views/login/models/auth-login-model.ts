export class AuthLogin{
    public login: string;
    public password: string;

    constructor(data?: any){
        Object.assign(this,data);
    }
}