export class Contract{
  private id: number;
  private status: string;

  constructor(id: number, status: string){
    this.id = id;
    this.status = status;
  }

  public get Id(): number {
    return this.id;
  }

  public get Status(): string {
    return this.status;
  }
}