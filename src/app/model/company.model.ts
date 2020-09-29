import { Address } from './address.model';

export class Company{
    identifier:string = null;
    name: string;
    headquarter: Address = new Address("", "", "");
    employees:any[];
    //archived: boolean;
    ceoemail: string;
    ceoname: string;

    constructor(name: string, headquarter: Address, employees:any[],
        ceoemail: string, ceoname: string){
            this.name = name;
            this.headquarter = headquarter;
            this.employees = employees;
            this.ceoemail = ceoemail;
            this.ceoname = ceoname;
    }
}
