import React, { useEffect, useState } from "react";
import { Input, Drawer, Button, Form, Modal, Table, Radio } from "antd";
import { useGetAllCampaigns } from "../common/hooks/campaigns";

function Campaigns() {
  const columns = [
    {
      title: "Campaign",
      dataIndex: "name",
    },
    {
      title: "Company",
      dataIndex: "name",
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
