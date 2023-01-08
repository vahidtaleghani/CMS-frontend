export class Comment{
  private contractId: number;
    private id: number;
    private comment: string;
    private  personName: string;
    private date: string
  
    constructor(contractId: number, id: number, comment: string, personName: string, date: string) {
      this.contractId = contractId
      this.id = id;
      this.comment = comment;
      this.personName = personName;
      this.date = date;
    }

    public get ContractId(): number{
      return this.contractId;
    }
  
    public get Id(): number {
      return this.id;
    }
  
  
    public get Comment(): string {
      return this.comment;
    }

    public set Comment(comment: string){
        this.comment = comment;
    }

    public get PersonName(): string {
        return this.personName;
    }

    public set PersonName(personName: string){
        this.personName = personName;
    }

    public get Date(): string {
        return this.date;
    }

    public set Date(date: string){
        this.date = date;
    }

}