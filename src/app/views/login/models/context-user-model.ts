export class ContextUser{
    public id: string;
    public login:string;
    public isAuthenticated: boolean;
    public name: string;

    constructor(data:any){
        Object.assign(this,data);
    }
}