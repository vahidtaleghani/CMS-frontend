export class Duty {
    private id: number;
    private dutyTypeId: string;
    private comment: string;
    private date: string;

    constructor(id: number, date: string, dutyTypeId: string, comment: string) {
        this.id = id;
        this.date = date;
        this.dutyTypeId = dutyTypeId;
        this.comment = comment;
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