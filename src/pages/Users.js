import { useMutation } from "@tanstack/react-query";
import {
  Input,
  Drawer,
  Button,
  Form,
  Modal,
  Table,
  Radio,
  message,
} from "antd";

import React, { useEffect, useState } from "react";
import { useGetAllUsers } from "../common/hooks/users/use-get-users";
import { services } from "../common/services/services";
import UpdateUserInfoDrawer from "../components/drawers/UpdateUserInfoDrawer";

const Users = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      render: (name) => `${name}`,
      width: "14%",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      sorter: true,
      width: "14%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "14%",
    },
    {
      title: "isUserActive",
      dataIndex: "isUserActive",
      render: (isUserActive) => `${isUserActive}`,
      width: "14%",
    },
    {
      title: "isEmailVerified",
      dataIndex: "isEmailVerified",
      render: (isEmailVerified) => `${isEmailVerified}`,
      width: "14%",
    },
    {
      title: "isPhoneVerified",
      dataIndex: "isPhoneVerified",
      render: (isPhoneVerified) => `${isPhoneVerified}`,
      width: "14%",
    },

    {
      title: "Edit",
      dataIndex: "edit",

      render: (text, record, index) => (
        <Button onClick={() => (setClickedUser(record), setIsOpenDrawer(true))}>
          Edit
        </Button>
      ),
      width: "14%",
    },
  ];

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const users = useGetAllUsers();

  useEffect(() => {}, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const [clickedUser, setClickedUser] = useState(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const mutateUser = useMutation(services.updateUserByID);

  const updateUserInfo = async (newValues) => {
    mutateUser.mutate(newValues._id);
  };

  if (mutateUser.isSuccess) {
    setIsOpenDrawer(false);
    message.success("User information is updated ");
    users.refetch();
  }
  if (mutateUser.isError) {
    message.error("opps something went wrong !!");
  }

  return (
    <>
      {users.isFetched && users?.data?.data["users"].length != 0 && (
        <>
          <Table
            columns={columns}
            rowKey={(record) => record["_id"]}
            dataSource={users.data.data["users"]}
            pagination={{
              ...tableParams.pagination,
              position: ["bottomCenter"],
            }}
            onChange={handleTableChange}
          />
        </>
      )}
      {isOpenDrawer && (
        <UpdateUserInfoDrawer
          isOpenDrawer={isOpenDrawer}
          updateUserInfo={updateUserInfo}
          setIsOpenDrawer={setIsOpenDrawer}
          clickedUser={clickedUser}
          isSubmitting={mutateUser.isLoading}
        />
      )}
    </>
  );
};
export default Users;
