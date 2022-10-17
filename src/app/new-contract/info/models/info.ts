export class Info{

    private comment: string;
    private isTemporary: string;
    private contractStatusId: string;
    private contractTypeId: string;
    private startDate: string;
    private endDate: string;
    private isReferencedToAnotherProject: string;
    private projectId: number;
    private projectName: string;
    private terminationPeriod: string;
    private expDate: string;
  
    constructor(comment: string, isTemporary: string, contractStatusId: string, contractTypeId: string, startdate: string, enddate: string
      , isReferencedToAnotherProject: string, projectId: number, projectName: string, terminationPeriod: string, expDate: string){
        this.comment = comment;
        this.isTemporary = isTemporary;
        this.contractStatusId = contractStatusId;
        this.contractTypeId = contractTypeId;
        this.startDate = startdate;
        this.endDate = enddate;
        this.isReferencedToAnotherProject = isReferencedToAnotherProject;
        this.projectId = projectId;
        this.projectName = projectName;
        this.terminationPeriod = terminationPeriod;
        this.expDate = expDate;
    }
  
    public get Comment(): string {
      return this.comment;
    }

    public set Comment(comment: string) {
      this.comment = comment;
    }

  
    public get IsTemporary(): string {
      return this.isTemporary;
    }
  
    public set IsTemporary(isTemporary: string) {
      this.isTemporary=isTemporary;
    }

    public get ContractStatusId(): string {
      return this.contractStatusId;
    }

    public set ContractStatusId(contractStatusId: string) {
      this.contractStatusId=contractStatusId;
    }

    public get ContractTypeId(): string {
      return this.contractTypeId;
    }

    public set ContractTypeId(contractTypeId: string) {
      this.contractTypeId = contractTypeId;
    }
  
    public get StartDate(): string {
      return this.startDate;
    }

    public set StartDate(startDate: string) {
      this.startDate = startDate;;
    }
  
    public get EndDate(): string {
      return this.endDate;
    }

    public set EndDate(endDate: string) {
      this.endDate = endDate;
    }
  
    public get IsReferencedToAnotherProject(): string {
      return this.isReferencedToAnotherProject;
    }

    public set IsReferencedToAnotherProject(isReferencedToAnotherProject: string) {
      this.isReferencedToAnotherProject = isReferencedToAnotherProject;
    }
  
    public get ProjectId(): number {
      return this.projectId;
    }

    public set ProjectId(projectId: number) {
      this.projectId = projectId;
    }
  
    public get ProjectName(): string {
      return this.projectName;
    }

    public set ProjectName(projectName: string) {
      this.projectName = projectName;
    }
  
    public get TerminationPeriod(): string {
      return this.terminationPeriod;
    }

    public set TerminationPeriod(terminationPeriod: string){
      this.terminationPeriod = terminationPeriod;
    }
  
    public get ExpDate(): string {
      return this.expDate;
    }

    public set ExpDate(expDate: string) {
      this.expDate = expDate;
    }
  }












  // export class Info{

  //   private comment: string;
  //   private isTemporary: boolean;
  //   private contractStatusId: number;
  //   private contractTypeId: number;
  //   private startDate: string;
  //   private endDate: string;
  //   private isReferencedToAnotherProject: boolean;
  //   private projectId: string;
  //   private projectName: string;
  //   private terminationPeriod: string;
  //   private expDate: string;
  
  //   constructor(comment: string, isTemporary: boolean, contractStatusId: number, contractTypeId: number, startdate: string, enddate: string
  //     , isReferencedToAnotherProject: boolean, projectId: string, projectName: string, terminationPeriod: string, expDate: string){
  //       this.comment = comment;
  //       this.isTemporary = isTemporary;
  //       this.contractStatusId = contractStatusId;
  //       this.contractTypeId = contractTypeId;
  //       this.startDate = startdate;
  //       this.endDate = enddate;
  //       this.isReferencedToAnotherProject = isReferencedToAnotherProject;
  //       this.projectId = projectId;
  //       this.projectName = projectName;
  //       this.terminationPeriod = terminationPeriod;
  //       this.expDate = expDate;
  //   }
  
  //   public get Comment(): string {
  //     return this.comment;
  //   }

  //   public set Comment(comment: string) {
  //     this.comment = comment;
  //   }

  
  //   public get IsTemporary(): boolean {
  //     return this.isTemporary;
  //   }
  
  //   public set IsTemporary(isTemporary: boolean) {
  //     this.isTemporary=isTemporary;
  //   }

  //   public get ContractStatusId(): number {
  //     return this.contractStatusId;
  //   }

  //   public set ContractStatusId(contractStatusId: number) {
  //     this.contractStatusId=contractStatusId;
  //   }

  //   public get ContractTypeId(): number {
  //     return this.contractTypeId;
  //   }

  //   public set ContractTypeId(contractTypeId: number) {
  //     this.contractTypeId = contractTypeId;
  //   }
  
  //   public get StartDate(): string {
  //     return this.startDate;
  //   }

  //   public set StartDate(startDate: string) {
  //     this.startDate = startDate;;
  //   }
  
  //   public get EndDate(): string {
  //     return this.endDate;
  //   }

  //   public set EndDate(endDate: string) {
  //     this.endDate = endDate;
  //   }
  
  //   public get IsReferencedToAnotherProject(): boolean {
  //     return this.isReferencedToAnotherProject;
  //   }

  //   public set IsReferencedToAnotherProject(isReferencedToAnotherProject: boolean) {
  //     this.isReferencedToAnotherProject = isReferencedToAnotherProject;
  //   }
  
  //   public get ProjectId(): string {
  //     return this.projectId;
  //   }

  //   public set ProjectId(projectId: string) {
  //     this.projectId = projectId;
  //   }
  
  //   public get ProjectName(): string {
  //     return this.projectName;
  //   }

  //   public set ProjectName(projectName: string) {
  //     this.projectName = projectName;
  //   }
  
  //   public get TerminationPeriod(): string {
  //     return this.terminationPeriod;
  //   }

  //   public set TerminationPeriod(terminationPeriod: string){
  //     this.terminationPeriod = terminationPeriod;
  //   }
  
  //   public get ExpDate(): string {
  //     return this.expDate;
  //   }

  //   public set ExpDate(expDate: string) {
  //     this.expDate = expDate;
  //   }
  // }