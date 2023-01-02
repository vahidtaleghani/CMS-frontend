import { Byte } from "@angular/compiler/src/util";

export class DataFile{

    private id : number;
    private date: string;
    private fileName: string;
    private comment: string;
    private final: string;
    private data: Byte;

    constructor(id: number, date: string, fileName: string, comment:string, final: string, data: Byte) {
        this.id = id;
        this.date = date;
        this.fileName = fileName;
        this.comment = comment;
        this.final = final;
        this.data = data;
    }

    public get Id(): number { 
        return this.id
    }
    public get Date(): string {
        return this.date;
    }
    
    public set Date(date: string) {
        this.date = date;
    }

    public get FileName(): string {
        return this.fileName;
    }

    public set FileName(fileName: string) {
        this.fileName = fileName;
    }

    public get Comment(): string {
        return this.comment;
    }

    public set Comment(comment: string) {
        this.comment = comment;
    }

    public get Final(): string {
        return this.final;
    }

    public set Final(final: string) {
        this.final = final;
    }

    public get Data(): Byte {
        return this.data;
    }

    public set Data(data: Byte) {
        this.data = data;
    }
}