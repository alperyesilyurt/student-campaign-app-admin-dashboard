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
  const CompanyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const columns = [
    {
      title: "Campaign",
      dataIndex: "name",
      width: "10%",
    },
    /*     {
      title: "Company",
      dataIndex: "description",
      width: "14%",

    }, */
    {
      title: "Campaign Image",
      dataIndex: "campaignHeroImage",
      render: (record) => <Image width={140} src={record} />,
      width: "10%",
    },
    {
      title: "Company",
      dataIndex: "company",
      render: (record) => (
        <>
          <CompanyWrapper>
            <Image width={140} src={record.logo} />
            <Text strong>{record.name}</Text>
          </CompanyWrapper>
        </>
      ),
      width: "10%",
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
