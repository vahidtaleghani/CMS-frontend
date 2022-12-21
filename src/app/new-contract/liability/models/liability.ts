export enum PaymentPeriod {
    Monthly = 1,
    Annually = 2,
    Quarterly = 3
}

export class Liability {
    private contractId: number;
    private id: number;
    private dueDate: string;
    private paymentPeriodId: string;
    private cost: number;

    constructor(contractId: number, id: number, dueDate: string, paymentPeriodId: string, cost: number) {
        this.contractId = contractId;
        this.id = id;
        this.dueDate = dueDate;
        this.paymentPeriodId = paymentPeriodId;
        this.cost = cost;
    }

    public get ContractId(): number{
        return this.contractId;
    }

    public get Id(): number {
        return this.id;
    }

    public get DueDate(): string {
        return this.dueDate;
    }

    public set DueDate(dueDate: string) {
        this.dueDate = dueDate;
    }

    public get PaymentPeriodId(): string {
        return this.paymentPeriodId;
    }

    public set PaymentPeriodId(paymentPeriodId: string) {
        this.paymentPeriodId = paymentPeriodId;
    }

    public get Cost(): number {
        return this.cost;
    }

    public set Cost(cost: number) {
        this.cost = cost;
    }
}