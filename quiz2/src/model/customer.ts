
class Customer {
    private customerId: number;
    private firstName: string;
    private lastName: string;
    private premiumClass: boolean;
    
    

    constructor(cuid:number,frname:string,laname:string,preclass:boolean){
        this.customerId=cuid;
        this.firstName=frname;
        this.lastName=laname;
        this.premiumClass=preclass;
    }
    public toString():string{
        return `Customer Id: ${this.customerId}, FirstName: ${this.firstName},lastName
        : ${this.lastName}, Premium class: ${this.premiumClass}`
    }

    public setcustomerId(value: number) {
        this.customerId = value;
    }
    public setfirstName(value: string) {
        this.firstName = value;
    }
    public setlastName(value: string) {
        this.lastName = value;
    }
    public setpremiumClass(value: boolean) {
        this.premiumClass = value;
    }



    public getcustomerId(): number {
        return this.customerId;
    }
    public getfirstName(): string {
        return this.firstName;
    }
    public getlastName(): string {
        return this.lastName;
    }
    public getpremiumClass(): boolean {
        return this.premiumClass;
    }

    
}
module.exports=Customer;
