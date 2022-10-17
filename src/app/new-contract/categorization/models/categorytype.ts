export class CategoryType{
    private id: number;
    private type: string;
  
    public get Id(): number {
      return this.id;
    }

    constructor(id: number,type : string){
        this.id = id;
        this.type = type;
    }

    public get Type() : string{
        return this.type;
    }

    public set Type(type : string){
        this.type = type;
    }
}