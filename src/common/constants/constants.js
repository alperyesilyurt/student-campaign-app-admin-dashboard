export const BASE_LOCAL_URL = "http://localhost:3000/";
export const BASE_DEV_URL = "https://dev.unilifeapp.net/";

export const ENDPOINTS = {
  campaigns: "v1/campaigns",
  campaignsFeatured: "v1/campaigns/featured",
  auth: {
    login: "v1/authentication/login",
    register: "v1/authentication/register",
  },
  getAllUsers: "/v1/users",
  updateUserByID: `/v1/users`,
  mailTemplates: `/v1/mailtemplates`,
};

export const STORAGE_KEYS = {
  token: "TOKEN",
};
