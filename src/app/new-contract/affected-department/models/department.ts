export class Department{
    private contractId: number;
    private id: number;
    private name: string;
    private personName: string;

    constructor(contractId: number, id: number, name: string, personName: string) {
        this.contractId = contractId;
        this.id = id;
        this.name = name;
        this.personName = personName;
    }

    public get ContractId() : number{
        return this.contractId;
    }

    public get Id(): number{
        return this.id;
    }

    public get Name(): string {
        return this.name;
    }

    public set Name(name: string) {
        this.name = name;
    }

    public set PersonName(personName: string){
        this.personName = personName;
    }
}