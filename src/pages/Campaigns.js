import { Table } from "antd";
import { useEffect, useState } from "react";
import { useGetAllCampaigns } from "../common/hooks/campaigns";
import qs from "qs";

const columns = [
  {
    title: "Campaign Name",
    dataIndex: "campaignName",
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

function Campaigns() {
  const [data, setData] = useState();
  const campaigns = useGetAllCampaigns();
  if (campaigns.isFetched) {
    campaigns.data.data = setData;
  }

  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      /*       onChange={handleTableChange} */
    />
  );
}

export default Campaigns;
