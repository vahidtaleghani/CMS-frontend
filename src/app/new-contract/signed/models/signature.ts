export class Signature{
    private contractId: number;
    private id: number;
    private firstname: string
    private lastname: string;
    private isSigned: string;
    private isCompletlySigned: string;
    private date: string

    constructor(contractId: number, id: number, firstname: string, lastname: string, isSigned: string, isCompletlySigned: string, date: string){
        this.contractId = contractId;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isSigned = isSigned;
        this.isCompletlySigned = isCompletlySigned;
        this.date = date;
    }

    public get ContractId(): number{
        return this.contractId;
    }

    public get Id() : number{
        return this.id;
    }

    public get Firstname() : string{
        return this.firstname;
    }

    public set Firstname(firstname: string) {
        this.firstname = firstname;
    }
    

    public get Lastname() : string{
        return this.lastname;
    }

    public set Lastname(lastname: string) {
        this.lastname = lastname;
    }

    public get IsSigned() : string{
        return this.isSigned;
    }

    public set IsSigned(isSigned: string) {
        this.isSigned = isSigned;
    }

    public get IsCompletlySigned() : string{
        return this.isCompletlySigned;
    }

    public set IsCompletlySigned(isCompletlySigned: string){
        this.isCompletlySigned = isCompletlySigned;
    }

    public get Date(): string {
        return this.date;
    }

    public set Date(date: string){
        this.date = date;
    }
}