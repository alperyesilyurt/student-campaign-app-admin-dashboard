import React from "react";
import { Drawer, Button, Form, Radio, Switch, Typography } from "antd";

import { Input } from "antd";
const { TextArea } = Input;

const ReplyContactsDrawer = (props) => {
  const { isOpenDrawer, setIsOpenDrawer, clickedContact, updateContactInfo } =
    props;

  const onFinish = (values) => {
    const payload = { ...values, _id: clickedContact["_id"] };
    updateContactInfo(payload);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Drawer
      title="Detailed contact info"
      width={520}
      closable={false}
      onClose={() => setIsOpenDrawer(false)}
      open={isOpenDrawer}
    >
      <Typography>Contact Message :: {clickedContact.message}</Typography>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{ ...clickedContact }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="isRead"
          name="isRead"
          rules={[
            {
              required: true,
              message: "Please input your isRead!",
            },
          ]}
          style={{ marginTop: 30 }}
        >
          <Radio.Group defaultValue={clickedContact?.isRead ? true : false}>
            <Radio value={true}> true</Radio>
            <Radio value={false}> false </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="replyMessage"
          name="replyMessage"
          rules={[
            {
              required: true,
              message: "Please input your replyMessage!",
            },
          ]}
          style={{ marginTop: 30 }}
        >
          <TextArea rows={4} placeholder="Please write the message " />
        </Form.Item>

        <Form.Item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            //   loading={isSubmitting}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ReplyContactsDrawer;
