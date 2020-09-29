import { Address } from './address.model';

export class User {
    
    identifier: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    address: Address;

    public constructor(username:string, password:string, firstname:string, lastnam:string, email:string, address:Address){
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastnam;
        this.email = email;
        this.address = address;
    }

}