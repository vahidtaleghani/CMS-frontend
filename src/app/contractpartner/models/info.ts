export class Info{
    private email: string;
    private telNumber: string;


    public constructor(email: string, telNumber: string) {
        this.email = email;
        this.telNumber = telNumber;
    }   

    public get Email(): string {
        return this.email;
    }

    public set Email(email: string) {
        this.email = email;
    }

    public get TelNumber(): string {
        return this.telNumber;
    }

    public set TelNumber(telNumber: string) {
        this.telNumber = telNumber;
    }

}