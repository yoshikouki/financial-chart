import axios from "axios";

const baseURL = "https://financialmodelingprep.com";
const baseParams = {
  apikey: process.env.FINANCIAL_MODELING_PREP_API_KEY,
};

interface Params {
  [key: string]: any;
}

export const get = async (path: string, params: Params) => {
  const res = await axios.get(`${baseURL}/${path}`, {
    params: { ...params, ...baseParams },
  });
  return res.data;
};
