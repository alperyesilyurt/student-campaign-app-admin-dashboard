
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
