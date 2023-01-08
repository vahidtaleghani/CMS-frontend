import { Address } from "./address";

export class ContractPartner{
    private contractId: number;
    private id: number;
    private companyName : string;
    private person : string;
    private companyRegistrationNumber : string;
    private department : string;
    private address: Address;
    private email : string;
    private telNumber : string;

    constructor(contractId: number, id: number, companyName : string, person : string, companyRegistrationNumber : string, department : string, address : Address, email : string, telNumber : string){
        this.contractId = contractId;
        this.id = id;
        this.companyName = companyName;
        this.person = person;
        this.companyRegistrationNumber = companyRegistrationNumber;
        this.department = department;
        this.address = address;
        this.email = email;
        this.telNumber = telNumber;
    }

    public get ContractId(): number { 
        return this.contractId
    }

    public get Id(): number { 
        return this.id
    }

    public get CompanyName(): string{
        return this.companyName;
    }

    public set CompanyName(companyName : string){
        this.companyName = companyName;
    }

    public get Person(): string{
        return this.person
    }

    public set Person(person : string){
        this.person = person;
    }

    public get CompanyRegistrationNumber(): string {
        return this.companyRegistrationNumber;
    }

    public set CompanyRegistrationNumber(companyRegistrationNumber: string){
        this.companyRegistrationNumber = companyRegistrationNumber;
    }

    public get Department(): string {
        return this.department;
    }

    public set Department(department: string){
        this.department = department;
    }

    public get Address(): Address {
        return this.address
    }

    public set Address(address: Address){
        this.address = address;
    }

    public get Email(): string {
        return this.email;
    }

    public set Email(email: string){
        this.email = email;
    }

    public get TelNumber(): string {
        return this.telNumber;
    }

    public set TelNumber(telNumber: string){
        this.telNumber = telNumber;
    }
}