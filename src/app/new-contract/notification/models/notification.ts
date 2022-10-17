export class Notification {
    private id: number;
    private notificationTypeId: string;
    private email: string;
    private recurring: string;
    private date: string;

    constructor(id: number, notificationTypeId: string, email: string, recurring: string, date: string) {
        this.id = id;
        this.notificationTypeId = notificationTypeId;
        this.email = email;
        this.recurring = recurring;
        this.date = date;
    }

    public get Id(): number {
        return this.id;
    }

    public get NotificationTypeId(): string {
        return this.notificationTypeId;
    }

    public set NotificationTypeId(notificationTypeId: string) {
        this.notificationTypeId = notificationTypeId;
    }

    public get Email(): string {
        return this.email;
    }

    public set Email(email: string) {
        this.email = email;
    }

    public get Recurring(): string {
        return this.recurring;
    }

    public set Recurring(recurring: string) {
        this.recurring = recurring;
    }

    public get Date(): string {
        return this.date;
    }

    public set Date(date: string){
        this.date = date;
    }

}