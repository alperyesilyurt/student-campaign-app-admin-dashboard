import { useQuery } from "@tanstack/react-query";

export const useGetCampaignByID = (id) => {
  const getSingleCampaigns = useQuery(
    ["getSingleCampaign"],
    () => {
      return ServiceWorkerRegistration.getCampaignByID(id);
    },
    {
      select: (data) => data,
    },
  );

  return getSingleCampaigns;
};
