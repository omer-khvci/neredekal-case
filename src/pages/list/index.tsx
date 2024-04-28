import {
  Avatar,
  Backdrop,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UserService from "../../../services/user-service";
import { UserViewModel } from "@/models/userViewModel";
import Link from "next/link";

const List = () => {
  const maxPageSize = Number(process.env.NEXT_PUBLIC_PAGE_SIZE);
  const [totalCount, setTotalCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [backDrop, setBackDrop] = useState(false);
  const [data, setData] = useState<UserViewModel>();

  const handleChangePage = (event: any, newPage: number) => {
    setCurrentPage(newPage);
    getUserList(maxPageSize, newPage);
    setBackDrop(true);
  };

  const getUserList = async (limit: number, page: number) => {
    const response = await UserService.GetAll(limit, limit * page);
    if (response.status === 200) {
      setData(response.data);
      setTotalCount(response.data.total);
    }
    setBackDrop(false);
  };
  useEffect(() => {
    getUserList(maxPageSize, currentPage);
  }, []);

  const CustomTableCell = styled(TableCell)(({ theme }) => ({
    color: "#000",
    fontSize: "14px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    lineeHight: "normal",
  }));
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <CustomTableCell align="right">Name</CustomTableCell>
              <CustomTableCell align="right">Email</CustomTableCell>
              <CustomTableCell align="right">Phone</CustomTableCell>
              <CustomTableCell align="right">Website</CustomTableCell>
              <CustomTableCell align="right">Company Name</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              height: "85px",
              borderRadius: "8px",
              background: "#FFF",
            }}
          >
            {data?.users?.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar
                    sx={{ width: 34, height: 34 }}
                    alt={user.firstName + " " + user.lastName}
                    src={user.image}
                  ></Avatar>
                </TableCell>

                <CustomTableCell align="right">{`${user.firstName}`}</CustomTableCell>
                <CustomTableCell align="right">{user.email}</CustomTableCell>
                <CustomTableCell align="right">{user.phone}</CustomTableCell>
                <CustomTableCell align="right">{user.domain}</CustomTableCell>
                <CustomTableCell align="right">
                  <Link href="">{user.company.name}</Link>
                </CustomTableCell>
                <CustomTableCell
                  align="right"
                  sx={{ borderTop: "1px solid rgba(224, 224, 224, 1);" }}
                >
                  <Button>
                    <img src="/img/pen-1.svg" alt="" />
                  </Button>
                  <Button>
                    <img src="/img/trash-1.svg" alt="" />
                  </Button>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[maxPageSize]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          onPageChange={handleChangePage}
        />
      </TableContainer>
    </>
  );
};

export default List;
