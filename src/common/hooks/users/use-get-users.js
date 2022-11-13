import { useQuery } from "@tanstack/react-query";
import { services } from "../../services/services";

export const useGetAllUsers = () => {
  const getAllUsers = useQuery(
    ["users"],
    () => {
      return services.getAllUsers();
    },
    {
      select: (data) => data,
    }
  );

  return getAllUsers;
};
