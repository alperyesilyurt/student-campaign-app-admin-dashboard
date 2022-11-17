import React, {  useState } from "react";
import { Button, Table, Typography, Image, notification } from "antd";
import { useGetAllCampaigns } from "../common/hooks/campaigns";
import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
import { services } from "../common/services/services";
import ChangeCampaignInfoDrawer from "../components/drawers/ChangeCampaignInfoDrawer";

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
      align: "center",
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
      align: "center",
      render: (record) => (
        <TableWrapper>
          <Image width={140} src={record} />
        </TableWrapper>
      ),
    },
    {
      title: "Campaign Status",
      align: "center",
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
      align: "center",
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
      align: "center",
      render: (_, record) => (
        <>
          <TableWrapper>
            <Button
              onClick={() => openEditUserDrawer(record)}
              type="dashed"
              icon={<EditOutlined />}
              size="large"
            />
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
  const openEditUserDrawer = (record) => {
    setClickedUser(record);
    setIsOpenDrawer(true);
  };
  const [clickedUser, setClickedUser] = useState(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

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

  };

  return (
    <>
      {campaigns.isFetched && (
        <>
          <Table
            bordered
            columns={columns}
            dataSource={campaigns?.data?.data}
            rowKey={(record) => record["_id"]}
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
          setIsOpenDrawer={setIsOpenDrawer}
          clickedUser={clickedUser}
          updateCampaign={updateCampaign}
        />
      )}
    </>
  );
}

export default Campaigns;
