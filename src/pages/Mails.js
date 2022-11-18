import React from "react";
import { useGetAllMailTemplates } from "../common/hooks/mailTemplates";
import styled from "styled-components";
import { Button, Card, Form, Input } from "antd";
const Mails = () => {
  const mailTemplates = useGetAllMailTemplates();

  const MailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  `;

  const onFinishCreate = (values) => {
    console.log("backende gidecek create", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card
        className="criclebox tablespace mb-24"

        title="Create Mail Template"
      >
        <MailWrapper>
          <Form
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 24,
            }}
            onFinish={onFinishCreate}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Title"
              name="tile"
              rules={[
                {
                  required: true,
                  message: "Please input your Title!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="ID"
              name="_id"
              rules={[
                {
                  required: true,
                  message: "Please input your ID!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your Description!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Template Path Name"
              name="templatePathName"
              rules={[
                {
                  required: true,
                  message: "Please input your Template Path Name!",
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
        </MailWrapper>
      </Card>

      {mailTemplates.isFetched &&
        mailTemplates?.data?.data?.map((item, index) => (
          <Card
            className="criclebox tablespace mb-24"
            key={index}
            cover={
              <div dangerouslySetInnerHTML={{ __html: item.templateSource }} />
            }
            hoverable={true}
            style={{
              width: 360,
            }}
          >
            <MailWrapper>
            <p>
              <strong>Title:</strong> {item.title}
            </p>
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>ID:</strong> {item._id}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
            <p>
              <strong>Template Path Name:</strong> {item.templatePathName}
            </p>
            </MailWrapper>

          </Card>
        ))}
    </>
  );
};
export default Mails;
