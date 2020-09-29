export class Address {
    identifier: number = null;
    street: string;
    city: string;
    zipcode: string;

    constructor(str:string, c:string, zc:string){
        this.identifier = null;
        this.street = str;
        this.city = c;
        this.zipcode = zc;
    }
}