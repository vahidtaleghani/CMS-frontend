export class Fine{
    private contractId: number;
    private id : number;
    private deadline: string;
    private price: number;
    private comment: string;

    constructor( contractId: number, id: number, deadline: string, price: number, comment:string) {
        this.contractId = contractId;
        this.id = id;
        this.deadline = deadline;
        this.price = price;
        this.comment = comment;
    }

    public get ContractId(): number{
        return this.contractId;
    }

    public get Id(): number { 
        return this.id
    }
    public get Deadline(): string {
        return this.deadline;
    }
    
    public set Deadline(deadline: string) {
        this.deadline = deadline
    }

    public get Price(): number {
        return this.price;
    }

    public set Price(price: number) {
        this.price = price;
    }

    public get Comment(): string {
        return this.comment
    }

    public set Comment(comment: string) {
        this.comment = comment;
    }

}