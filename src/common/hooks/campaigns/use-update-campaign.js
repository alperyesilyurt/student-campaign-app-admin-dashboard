import { useQuery } from "@tanstack/react-query";
import { services } from "../../services/services";

export const useUpdateCampaign = () => {
  const updateCampaign = useQuery(
    ["campaigns"],
    () => {
      return services.updateCampaign();
    },
    {
      select: (data) => data,
    }
  );

  return updateCampaign;
};
