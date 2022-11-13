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

const UpdateUserInfoDrawer = (props) => {
  const {
    isOpenDrawer,
    updateUserInfo,
    setIsOpenDrawer,
    clickedUser,
    isSubmitting,
  } = props;

  const onFinish = (values) => {
    const payload = { ...values, _id: clickedUser["_id"] };
    updateUserInfo(payload);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          <Radio.Group defaultValue={clickedUser.isUserActive ? true : false}>
            <Radio value={true}> true</Radio>
            <Radio value={false}> false </Radio>
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
          <Radio.Group
            defaultValue={clickedUser.isEmailVerified ? true : false}
          >
            <Radio value={true}> true</Radio>
            <Radio value={false}> false </Radio>
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
          <Radio.Group
            defaultValue={clickedUser.isPhoneVerified ? true : false}
          >
            <Radio value={true}> true</Radio>
            <Radio value={false}> false </Radio>
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
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default UpdateUserInfoDrawer;
