import { Input, Drawer, Button, Form, Radio } from "antd";

const ChangeCampaignInfoDrawer = (props) => {
  const { isOpenDrawer, setIsOpenDrawer, clickedUser, updateCampaign } = props;

  const onFinish = (values) => {
    console.log(values)
    const payload = {
      company: {
        name: values.name,
        logo: "https://docs.nestjs.com/assets/logo-small.svg",
      },
    };
    updateCampaign(clickedUser["_id"], payload);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Drawer
      title="Detailed Campaigns Edit"
      width={520}
      closable={true}
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
          label="Campaign"
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

        {/*           <Form.Item
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
          </Form.Item> */}

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

export default ChangeCampaignInfoDrawer;
