import React, { useEffect, useState } from "react";
import { User } from "@/models/user";
import UserService from "../../services/user-service";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import UserCard from "@/components/user-card";
import InfiniteScroll from "react-infinite-scroll-component";

type UserCardListProps = {
  data: User[];
  hasMore: boolean;
  loadData: () => void;
};

const UserCardList = (props: UserCardListProps) => {
  const { data, hasMore, loadData } = props;
  
  return (
    <>
      {
        <Container>
          {data.length > 0 && (
            <InfiniteScroll
              dataLength={data.length}
              next={loadData}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
              hasMore={hasMore}
              loader={<CircularProgress />} 
            >
              {data?.map((user, index) => (
                <UserCard user={user} key={index} />
              ))}
            </InfiniteScroll>
          )}
        </Container>
      }
    </>
  );
};

export default UserCardList;
