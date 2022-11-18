import { useQuery } from "@tanstack/react-query";
import { services } from "../../services/services";

export const useGetAllMailTemplates = () => {
  const getAllMailTemplates = useQuery(
    ["campaigns"],
    () => {
      return services.getAllMailTemplates();
    },
    {
      select: (data) => data,
    }
  );

  return getAllMailTemplates;
};
