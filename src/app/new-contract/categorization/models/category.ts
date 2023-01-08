import { CategoryType } from "./categorytype";

export class Category{
    private contractId: number;
    private id : number;
    private comment : string;
    private categoryTypeId : string;

    constructor(contractId: number, id : number, comment : string, categoryTypeId : string){
        this.contractId = contractId;
        this.id = id;
        this.comment = comment;
        this.categoryTypeId = categoryTypeId;
    }

    public get ContractId() : number{
       return this.contractId;
    }

    public get Id(): number{
        return this.id;
    }

    public set Id(id: number){
        this.id = id;
    }

    public get Comment(): string{
        return this.comment;
    }

    public set Comment(comment: string){
        this.comment = comment;
    }

    public get CategoryTypeId(): string{
        return this.categoryTypeId;
    }

    public set CategoryTypeId(categoryTypeId: string){
        this.categoryTypeId = categoryTypeId;
    }
}