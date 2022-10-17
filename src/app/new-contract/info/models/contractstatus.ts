// export class ContractStatus {
//     private status: string;
  
//     constructor(status: string) {
//       this.status = status;
//     }
  
//     public get Status(): string {
//       return this.status;
//     }
//   }

  export class ContractStatus {
        private status: string;
        private id: number;
      
        constructor(id: number, status: string) {
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