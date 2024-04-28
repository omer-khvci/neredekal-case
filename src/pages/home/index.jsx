import React, { useEffect, useState } from 'react'
import UserService from "../../../services/user-service";
const Home = () => {
    const [data, setData] = useState([]);
    const getUserList = async () => {
      const response = await UserService.GetAll()
      if(response.status === 200){
        setData(response.data)
      }
  }
  useEffect(()=>{
    getUserList()
  },[])
  
  console.log(data);
  return (
    <div>index</div>
  )
}

export default Home