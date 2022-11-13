import { useGetAllCampaigns } from "../common/hooks/campaigns";

function Campaigns() {
  const campaigns = useGetAllCampaigns();
  console.log(campaigns);
  return (
    <>
      {campaigns.isFetched && console.log("campanign :: ", campaigns.data.data)}
    </>
  );
}

export default Campaigns;
