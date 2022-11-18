import React from "react";
import { useGetAllMailTemplates } from "../common/hooks/mailTemplates";
import styled from "styled-components";
import { Button, Card, Form, Input, notification } from "antd";
import { services } from "../common/services/services";
const Mails = () => {
  const mailTemplates = useGetAllMailTemplates();

  const MailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  `;
  const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  const createMailTemplate = async (payload) => {
    try {
      const response = await services.createMailTemplate(payload);
      if (response && !response.error) {
        const args = {
          message: "Created",
          description: "Mail Template created",
          duration: 6000,
        };
        notification.open(args);
      }
    } catch (error) {
      const args = {
        message: "Not created ❌",
        description: "Mail Template couldn't created ❌",
        duration: 6000,
      };

      notification.open(args);
    }
  };

  const deleteMailTemplate = async (id) => {
    try {
      const response = await services.deleteMailTemplate(id);
      if (response && !response.error) {
        const args = {
          message: "deleted",
          description: "Mail Template deleted",
          duration: 6000,
        };
        notification.open(args);
      }
    } catch (error) {
      const args = {
        message: "Not deleted ❌",
        description: "Mail Template couldn't deleted ❌",
        duration: 6000,
      };

      notification.open(args);
    }
  };
  const onFinishCreate = (values) => {
    const payload = {
      name: values.name,
      description: values.description,
      templatePathName: values.templatePathName,
      title: values.title,
      useCases: [values.useCases],
      emailContext: [values.emailContext],
      templateSource: values.templateSource,
    };
    createMailTemplate(payload);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card className="criclebox tablespace mb-24" title="Create Mail Template">
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
              label="Title"
              name="title"
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
              label="useCases"
              name="useCases"
              rules={[
                {
                  required: true,
                  message: "Please input your useCases!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="emailContext"
              name="emailContext"
              rules={[
                {
                  required: true,
                  message: "Please input your emailContext!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="templateSource"
              name="templateSource"
              rules={[
                {
                  required: true,
                  message: "Please input your templateSource!",
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
      <CardWrapper>
        {mailTemplates.isFetched &&
          mailTemplates?.data?.data?.map((item, index) => (
            <Card
              className="criclebox tablespace mb-24"
              key={index}
              cover={
                <div
                  dangerouslySetInnerHTML={{ __html: item.templateSource }}
                />
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
                <Button onClick={()=>deleteMailTemplate(item._id)} type="danger">Delete Template</Button>
              </MailWrapper>
            </Card>
          ))}
      </CardWrapper>
    </>
  );
};
export default Mails;
