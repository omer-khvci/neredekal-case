export interface User  {
    id : number;
    firstName: string;
    email:string;
    image:string;
    lastName:string;
    phone:string;
    domain:string;
    company:Company;

}

export interface Company{
    address:Address;
    department:string;
    name:string;
    title:string
}

export interface Address{
    address:string;
    city:string;
}