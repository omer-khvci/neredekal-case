import {
  Backdrop,
  CircularProgress,
  Container,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserViewModel } from "@/models/userViewModel";
import Link from "next/link";
import UserService from "../../services/user-service";
import { User } from "@/models/user";

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  color: "#000",
  fontSize: "14px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  lineHight: "normal",
}));

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: transparent;
  }

  &:nth-of-type(even) {
    background-color: rgb(242, 242, 242);
  }
`;

const CustomTable = styled(Table)(({ theme }) => ({
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.75)",
}));

const HeadTableCell = styled(TableCell)(({ theme }) => ({
  color: "#000",
  fontSize: "20px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
}));

type UserTableListProps = {
  data: User[];
  backDrop: boolean;
  loadData: () => void;
  totalCount: number;
};

const UserTableList = (props: UserTableListProps) => {
  const { data, loadData, backDrop, totalCount } = props;

  const itemPerPage = Number(process.env.NEXT_PUBLIC_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChangePage = (event: any, newPage: number) => {
    if (itemPerPage * newPage >= data.length) {
      loadData();

    }
    setCurrentPage(newPage);
    
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container>
        <CustomTable aria-label="simple table">
          <TableHead>
            <TableRow>
              <HeadTableCell align="left">Name</HeadTableCell>
              <HeadTableCell align="center">LastName</HeadTableCell>
              <HeadTableCell align="right">Email</HeadTableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              height: "85px",
              borderRadius: "8px",
              background: "#FFF",
            }}
          >
            {data
              .slice(
                currentPage * itemPerPage,
                currentPage * itemPerPage + itemPerPage
              )
              ?.map((user, index) => (
                <TableRowStyled key={index}>
                  <CustomTableCell align="left">
                    <Link href={`user-detail/${user.id}`}>{`${user.firstName}`}</Link>
                  </CustomTableCell>

                  <CustomTableCell align="center">
                    {`${user.lastName}`}
                  </CustomTableCell>
                  <CustomTableCell align="right">{user.email}</CustomTableCell>
                </TableRowStyled>
              ))}
          </TableBody>
        </CustomTable>
        <TablePagination
          rowsPerPageOptions={[itemPerPage]}
          component="div"
          count={totalCount}
          rowsPerPage={itemPerPage}
          page={currentPage}
          onPageChange={handleChangePage}
        />
      </Container>
    </>
  );
};

export default UserTableList;
