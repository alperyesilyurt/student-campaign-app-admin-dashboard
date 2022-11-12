import { Campaign } from "@/components/CampaignCard";
import { useQuery } from "@tanstack/react-query";
import { services } from "@/common/services/services";

export const useGetAllCampaigns = () => {
  const getAllCampaigns = useQuery(
    ["campaigns"],
    () => {
      return services.getAllCampaigns();
    },
    {
      select: (data) => data,
    }
  );

  return getAllCampaigns;
};
