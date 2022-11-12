import { Pagination, Table } from "antd";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

import styled from "styled-components";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const TableWrapper = styled.div`
  padding: 2%;
`;

const CustomPaginationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Users = () => {
  const [users, setUsers] = useState();
  const [paginationNumber, setPaginationNumber] = useState(1);

  useEffect(() => {
    getUsersFromDB();
  }, [paginationNumber]);

  const getUsersFromDB = async () => {
    console.log("DBye bağlanacak");
  };
  return (
    <TableWrapper>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
      <CustomPaginationDiv>
        <Pagination
          defaultCurrent={1}
          total={50}
          onChange={(page, pageSize) => setPaginationNumber(page)}
        />
      </CustomPaginationDiv>
    </TableWrapper>
  );
};

export default Users;
