export class Duty {
    private contractId : number;
    private id: number;
    private dutyTypeId: string;
    private comment: string;
    private date: string;

    constructor(contractId: number, id: number, date: string, dutyTypeId: string, comment: string) {
        this.contractId = contractId;
        this.id = id;
        this.date = date;
        this.dutyTypeId = dutyTypeId;
        this.comment = comment;
    }

    public get ContractId() : number{
        return this.contractId;
    }

    public get Id(): number {
        return this.id;
    }

    public get Date(): string {
        return this.date
    }

    public set Date(date: string) {
        this.date = date;
    }

    public get DutyTypeId(): string {
        return this.dutyTypeId;
    }

    public set DutyTypeId(dutyTypeId: string) {
        this.dutyTypeId = dutyTypeId;
    }

    public get Comment(): string {
        return this.comment;
    }

    public set Comment(comment: string) {
        this.comment = comment;
    }
}