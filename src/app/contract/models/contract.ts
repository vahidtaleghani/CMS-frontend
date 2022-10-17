export class Contract{
    private usertoken: string;
    private status: string;
  
    constructor(usertoken: string, status: string){
      this.usertoken = usertoken;
      this.status = status;
    }
  
    public get Usertoken(): string {
      return this.usertoken;
    }
  
    public get Status(): string {
      return this.status;
    }
  }