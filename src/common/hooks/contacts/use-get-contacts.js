import { useQuery } from "@tanstack/react-query";
import { services } from "../../services/services";

export const useGetAllContacts = () => {
  const getAllContacts = useQuery(
    ["contacts"],
    () => {
      return services.getAllContacts();
    },
    {
      select: (data) => data,
    }
  );

  return getAllContacts;
};
