import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import UserTableList from "@/components/user-table-list";
import UserCardList from "@/components/user-card-list";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import UserService from "../../../services/user-service";
import { User } from "@/models/user";
import { useEffect } from "react";

const Page = () => {
  const [viewType, setViewType] = useState(1);
  const [data, setData] = useState<User[]>([]);
  const limit =  Number(process.env.NEXT_PUBLIC_PAGE_SIZE);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    getUserList()
  }, [page]);


  const changePage = ()=>{
    setPage(page+1)
  }

  const getUserList = async () => {
    const response = await UserService.GetAll(limit, limit * page);

    if (response.status === 200) {
      
        setTotalCount(response.data.total)
      const totalCount = data.length + response.data.users.length;
      setData(data.concat(response.data.users));
      if (totalCount >= response.data.total) {
        setHasMore(false);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          marginBottom: "5px",
        }}
      >
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button onClick={() => setViewType(1)}>
            <FormatListBulletedIcon />
          </Button>
          <Button onClick={() => setViewType(2)}>
            <ViewModuleIcon />
          </Button>
        </ButtonGroup>
      </Box>
      {viewType == 1 && <UserTableList data={data} hasMore={hasMore} loadData={changePage}  totalCount={totalCount} />}

      {viewType == 2 && <UserCardList data={data} hasMore={hasMore} loadData={changePage}/>}
    </>
  );
};
export default Page;
