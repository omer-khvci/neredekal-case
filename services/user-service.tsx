import axios from "axios";

const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
const PageSize = Number(process.env.NEXT_PUBLIC_PAGE_SIZE);
const UserService = {

    GetAll: async (limit=PageSize, skip=0) =>{
        const url = `${ApiUrl}/users/?limit=${limit}&skip=${skip}&select=firstName,lastName,phone,email,company,domain,image`;
        const response = await axios.get(url)

        return response;
    },
    GetUserInfo: async (id:number) => {
        const url = `${ApiUrl}/users/${id}`
        const response = await axios(url);
        return response;
    },
    


}
export default UserService;