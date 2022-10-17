
export class Address{
    private street: string;
    private houseNumber: string;
    private postalCode: string;
    private city: string;

    public constructor(street: string, houseNumber: string, postalCode: string, city: string) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.postalCode = postalCode;
        this.city = city;
    }   

    public get Street(): string {
        return this.street;
    }

    public set Street(street: string) {
        this.street = street;
    }

    public get HouseNumber(): string {
        return this.houseNumber;
    }

    public set HouseNumber(houseNumber: string) {
        this.houseNumber = houseNumber;
    }

    public get PostalCode(): string {
        return this.postalCode
    }
    public set PostalCode(postalCode : string) {
        this.postalCode = postalCode;
    }

    public get City(): string {
        return this.city;
    }

    public set City(city : string) {
        this.city = city;
    }
}