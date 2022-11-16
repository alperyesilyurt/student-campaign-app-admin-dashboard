import { Input, Drawer, Button, Form, Radio, Divider } from "antd";
import styled from "styled-components";

const ChangeCampaignInfoDrawer = (props) => {
  const { isOpenDrawer, setIsOpenDrawer, clickedUser, updateCampaign } = props;

  const onFinish = (values) => {
    console.log("deneme",values);
    const payload = {
 
      "isVerified": values.isVerified,
      "isActive": values.isActive,
      "isFeatured": values.isFeatured,
      "name": values.name,
      "campaignHeroImage": values.campaignHeroImage,
      company: {
        name: values.companyName,
        logo: values.companyLogo,
      },
    };
    updateCampaign(clickedUser["_id"], payload);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Drawer
      title="Detailed Campaigns Edit"
      width={380}
      closable={true}
      onClose={() => setIsOpenDrawer(false)}
      open={isOpenDrawer}
    >
      <FormWrapper>
        <Form
          name="basic"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{ ...clickedUser }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="CampaignName"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your CampaignName!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Divider />
          <Form.Item
            label="CampaignImage"
            name="campaignHeroImage"
            rules={[
              {
                required: true,
                message: "Please input your CampaignName!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Divider />

          <Form.Item
            label="isCampaignVerified"
            name="isVerified"
            rules={[
              {
                required: true,
                message: "Please input your isCampaignVerified!",
              },
            ]}
            style={{ marginTop: 30 }}
          >
            <Radio.Group>
              <Radio value={true}> True</Radio>
              <Radio value={false}> False </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="isCampaignActive"
            name="isActive"
            rules={[
              {
                required: true,
                message: "Please input your isCampaignActive!",
              },
            ]}
            style={{ marginTop: 30 }}
          >
            <Radio.Group>
              <Radio value={true}> True</Radio>
              <Radio value={false}> False </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="isCampaignFeatured"
            name="isFeatured"
            rules={[
              {
                required: true,
                message: "Please input your isCampaignFeatured!",
              },
            ]}
            style={{ marginTop: 30 }}
          >
            <Radio.Group>
              <Radio value={true}> True</Radio>
              <Radio value={false}> False </Radio>
            </Radio.Group>
          </Form.Item>
          <Divider />
          <Form.Item
            label="CompanyName"
            name="companyName"
            rules={[
              {
                required: true,
                message: "Please input your CompanyName!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="CompanyLogo"
            name="companyLogo"
            rules={[
              {
                required: true,
                message: "Please input your CompanyLogo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Divider />

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
      </FormWrapper>
    </Drawer>
  );
};

export default ChangeCampaignInfoDrawer;
