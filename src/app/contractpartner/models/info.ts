export class Info{
    private companyName: string;
    private contactNumber: string;
    private contractType: string;
    private contactPerson: string;
    private status: string;


    public constructor(companyName: string , contactNumber: string, contractType : string , contactPerson: string , status: string) {
        this.companyName = companyName;
        this.contactNumber = contactNumber;
        this.contractType = contractType;
        this.contactPerson = contactPerson;
        this.status = status;
    }   

    public get CompanyName(): string {
        return this.companyName;
    }

    public set CompanyName(companyName: string) {
        this.companyName = companyName;
    }

    public get ContactNumber(): string {
        return this.contactNumber;
    }

    public set ContactNumber(contactNumber: string) {
        this.contactNumber = contactNumber;
    }

    public get ContractType(): string {
        return this.contractType;
    }

    public set ContractType(contractType: string) {
        this.contractType = contractType;
    }

    public get ContactPerson(): string {
        return this.contactPerson;
    }

    public set ContactPerson(contactPerson: string) {
        this.contactPerson = contactPerson;
    }

    public get Status(): string {
        return this.status;
    }

    public set Status(status: string) {
        this.status = status;
    }

}