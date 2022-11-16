import React, { useEffect, useState } from "react";
import {
  Input,
  Drawer,
  Button,
  Form,
  Table,
  Typography,
  Image,
  Radio,
  notification,
} from "antd";
import { useGetAllCampaigns } from "../common/hooks/campaigns";
import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
import { services } from "../common/services/services";

const { Text } = Typography;

function Campaigns() {
  const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const columns = [
    {
      title: "Campaign",
      dataIndex: "name",
      align: 'center',
      sorter: true,
      render: (record) => (
        <>
          <TableWrapper>
            <Text strong>{record}</Text>
          </TableWrapper>
        </>
      ),
    },
    {
      title: "Campaign Image",
      dataIndex: "campaignHeroImage",
      align: 'center',
      render: (record) => (
        <TableWrapper>
          <Image width={140} src={record} />
        </TableWrapper>
      ),
    },
    {
      title: "Campaign Status",
      align: 'center',
      render: (record) => (
        <>
          <TableWrapper>
            <Text strong>Verified {record.isVerified ? "✅" : "❌"}</Text>
            <Text strong>Active {record.isActive ? "✅" : "❌"}</Text>
            <Text strong>Featured {record.isFeatured ? "✅" : "❌"}</Text>
          </TableWrapper>
        </>
      ),
    },
    {
      title: "Company",
      dataIndex: "company",
      align: 'center',
      render: (record) => (
        <>
          <TableWrapper>
            <Image width={80} src={record.logo} />
            <Text strong>{record.name}</Text>
          </TableWrapper>
        </>
      ),
    },
    {
      title: "Edit",
      dataIndex: "edit",
      align: 'center',
      render: (record) => (
        <>
          <TableWrapper>
          <Button onClick={() => (setClickedUser(record), setIsOpenDrawer(true))} type="dashed" icon={<EditOutlined />} size="large" />
          </TableWrapper>
        </>
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

  const campaigns = useGetAllCampaigns();

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const [clickedUser, setClickedUser] = useState(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);


  const changeCampaignInfo = async (newValues) => {
    console.log("newValues :: ", newValues);
    console.log("clickedUSer :: ", clickedUser);
    // setIsOpenModal(false);
  };
 

  const updateCampaign = async (id, payload) => {
    try {
      const response = await services.updateCampaign(id, payload);
      if (response && !response.error) {
        const args = {
          message: "Updated",
          description: "User updated",
          duration: 6000,
        };
        notification.open(args);
      }
    } catch (error) {
      const args = {
        message: "Not updated ❌",
        description: "User couldn't updated ❌",
        duration: 6000,
      };

      notification.open(args);
    }
    //fetchUsers();
  };

  return (
    <>
      {campaigns.isFetched && campaigns?.data?.data != 0 && (
        <>
          <Table
            bordered
            columns={columns}
            rowKey={(record) => record["_id"]}
            dataSource={campaigns?.data?.data}
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
        <ChangeCampaignInfoDrawer
          isOpenDrawer={isOpenDrawer}
          changeCampaignInfo={changeCampaignInfo}
          setIsOpenDrawer={setIsOpenDrawer}
          clickedUser={clickedUser}
          updateCampaign={updateCampaign}
        />
      )}
    </>
  );
}

export default Campaigns;


