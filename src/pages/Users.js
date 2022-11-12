import { Input, Button, Form, Modal, Table } from "antd";

import { async } from "q";
import qs from "qs";
import React, { useEffect, useState } from "react";

const Users = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Edit",
      dataIndex: "edit",

      render: (text, record, index) => (
        <Button onClick={() => (setClickedUser(record), setIsOpenModal(true))}>
          Edit
        </Button>
      ),
      width: "20%",
    },
  ];

  const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clickedUser, setClickedUser] = useState(null);

  const changeUserInfo = async () => {
    console.log("clickedUSer :: ", clickedUser);
    setIsOpenModal(false);
  };

  return (
    <>
      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={{ ...tableParams.pagination, position: ["bottomCenter"] }}
        loading={loading}
        onChange={handleTableChange}
      />
      <ChangeUserInfoModal
        isOpenModal={isOpenModal}
        changeUserInfo={changeUserInfo}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
};
export default Users;

const ChangeUserInfoModal = (props) => {
  const { isOpenModal, changeUserInfo, setIsOpenModal } = props;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Basic Modal"
      open={isOpenModal}
      onOk={() => changeUserInfo()}
      onCancel={() => setIsOpenModal(false)}
    >
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{
          remember: true,
        }}
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
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please input your gender!",
            },
          ]}
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
        >
          <Input />
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
    </Modal>
  );
};
