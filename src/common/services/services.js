import { ENDPOINTS } from "../constants/constants";
import HttpClient from "./HttpClient";

export const services = {
  getAllCampaigns: async () => {
    const response = HttpClient.get(ENDPOINTS.campaigns);
    return response;
  },
  getCampaignByID: async (id) => {
    const response = HttpClient.get(`${ENDPOINTS.campaigns}/${id}`);
    return response;
  },
  getFeaturedCampaigns: async () => {
    const response = HttpClient.get(ENDPOINTS.campaignsFeatured);
    return response;
  },
  getAllUsers: async () => {
    const response = HttpClient.get(ENDPOINTS.getAllUsers);
    return response;
  },
  updateUserByID: async (id) => {
    try {
      const response = HttpClient.put(`${ENDPOINTS.updateUserByID}/${id}`);
      return response;
    } catch (error) {
      console.log("updateUserByID error ::", error);
    }
  },
  login: async (loginForm) => {
    try {
      const response = HttpClient.post(ENDPOINTS.auth.login, loginForm);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  register: async (registerForm) => {
    try {
      const response = HttpClient.post(ENDPOINTS.auth.register, registerForm);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
