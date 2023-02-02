// export class ContractType {
//     private type: string;
  
//     constructor(type: string) {
//       this.type = type;
//     }
  
//     public get Type(): string {
//       return this.type;
//     }
//   }





  export class ContractType {
    private id: number;
    private type: string;
  
    constructor(id: number, type: string) {
      this.id = id;
      this.type = type;
    }
  
    public get Id(): number {
      return this.id;
    }
  
  
    public get Type(): string {
      return this.type;
    }
  }