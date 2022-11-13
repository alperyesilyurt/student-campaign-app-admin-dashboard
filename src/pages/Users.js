import { Input, Drawer, Button, Form, Modal, Table, Radio } from "antd";

import { async } from "q";
import qs from "qs";
import React, { useEffect, useState } from "react";
import { useGetAllUsers } from "../common/hooks/users/use-get-users";

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

  // const getRandomuserParams = (params) => ({
  //   results: params.pagination?.pageSize,
  //   page: params.pagination?.current,
  //   ...params,
  // });

  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  // const fetchData = () => {
  //   setLoading(true);
  //   fetch(
  //     `https://randomuser.me/api?${qs.stringify(
  //       getRandomuserParams(tableParams)
  //     )}`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setTableParams({
  //         ...tableParams,
  //         pagination: {
  //           ...tableParams.pagination,
  //           total: 200,
  //           // 200 is mock data, you should read it from server
  //           // total: data.totalCount,
  //         },
  //       });
  //     });
  // };

  const users = useGetAllUsers();

  useEffect(() => {
    // fetchData();
    console.log("users :: ", users);
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const [clickedUser, setClickedUser] = useState(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const changeUserInfo = async (newValues) => {
    console.log("newValues :: ", newValues);
    console.log("clickedUSer :: ", clickedUser);
    // setIsOpenModal(false);
  };

  return (
    <>
      {users.isFetched && users?.data?.data["users"].length != 0 && (
        <>
          {console.log("users ::", users.data.data["users"])}
          <Table
            columns={columns}
            rowKey={(record) => record["_id"]}
            dataSource={users.data.data["users"]}
            pagination={{
              ...tableParams.pagination,
              position: ["bottomCenter"],
            }}
            // loading={loading}
            onChange={handleTableChange}
          />
        </>
      )}
      {isOpenDrawer && (
        <ChangeUserInfoDrawer
          isOpenDrawer={isOpenDrawer}
          changeUserInfo={changeUserInfo}
          setIsOpenDrawer={setIsOpenDrawer}
          clickedUser={clickedUser}
        />
      )}
    </>
  );
};
export default Users;

const ChangeUserInfoDrawer = (props) => {
  const { isOpenDrawer, changeUserInfo, setIsOpenDrawer, clickedUser } = props;

  const onFinish = (values) => {
    changeUserInfo(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log("drawer render edildil");
  }, [isOpenDrawer]);

  return (
    <Drawer
      title="Detailed person information"
      width={520}
      closable={false}
      onClose={() => setIsOpenDrawer(false)}
      open={isOpenDrawer}
    >
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{ ...clickedUser }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Surname"
          name="surname"
          rules={[
            {
              required: true,
              message: "Please input your surname!",
            },
          ]}
          style={{ marginTop: 30 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          style={{ marginTop: 30 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="isUserActive"
          name="isUserActive"
          rules={[
            {
              required: true,
              message: "Please input your isUserActive!",
            },
          ]}
          style={{ marginTop: 30 }}
        >
          <Radio.Group>
            <Radio value="true"> true</Radio>
            <Radio value="false"> false </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="isEmailVerified"
          name="isEmailVerified"
          rules={[
            {
              required: true,
              message: "Please input your isEmailVerified!",
            },
          ]}
          style={{ marginTop: 30 }}
        >
          <Radio.Group>
            <Radio value="true"> true</Radio>
            <Radio value="false"> false </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="isPhoneVerified"
          name="isPhoneVerified"
          rules={[
            {
              required: true,
              message: "Please input your isPhoneVerified!",
            },
          ]}
          style={{ marginTop: 30 }}
        >
          <Radio.Group>
            <Radio value="true"> true</Radio>
            <Radio value="false"> false </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
