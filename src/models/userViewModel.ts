import { User } from "./user";

export interface UserViewModel{
     limit: number;
     skip: number;
     total: number;
     users:Array<User>;

}