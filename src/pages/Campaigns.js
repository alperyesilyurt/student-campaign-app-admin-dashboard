import React, { useEffect, useState } from "react";
import {
  Input,
  Drawer,
  Button,
  Form,
  Modal,
  Table,
  Typography,
  Image,
} from "antd";
import { useGetAllCampaigns } from "../common/hooks/campaigns";
import styled from "styled-components";

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

      render: (record) => (
        <TableWrapper>
          <Image width={140} src={record} />
        </TableWrapper>
      ),
    },
    {
      title: "Campaign Status",
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

      render: (record) => (
        <>
          <TableWrapper>
            <Image width={80} src={record.logo} />
            <Text strong>{record.name}</Text>
          </TableWrapper>
        </>
      ),
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
  return (
    <>
      {campaigns.isFetched && campaigns?.data?.data["campaigns"] != 0 && (
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
    </>
  );
}

export default Campaigns;
