export class Department{
    private id: number;
    private contractId: number;
    private departmentTypeId: string;
    private personName: string;

    constructor(id: number,  contractId: number, departmentTypeId: string, personName: string ) {
        this.id = id;
        this.contractId = contractId;
        this.departmentTypeId = departmentTypeId;
        this.personName = personName;
    }

    public get Id(): number{
        return this.id;
    }

    public get ContractId(): number {
        return this.contractId;
    }

    public set ContractId(contractid: number) {
        this.contractId = contractid;
    }

    public get DepartmentTypeId(): string {
        return this.departmentTypeId;
    }

    public set DepartmentTypeId(departmentTypeId: string) {
        this.departmentTypeId = departmentTypeId;
    }

    public get PersonName(): string {
        return this.personName;
    }

    public set PersonName(personName: string) {
        this.personName = personName;
    }

}