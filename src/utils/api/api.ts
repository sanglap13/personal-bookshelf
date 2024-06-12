import axios, { AxiosResponse } from "axios";
import { apiResponse } from "../../@types/Api.types";

export const api = async ({ query }: any): Promise<apiResponse | undefined> => {
  const API_URL = `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`;
  try {
    const response: AxiosResponse<apiResponse> = await axios.get(API_URL);
    const { data, status } = response;
    console.log(response);
    if (status) {
      return data;
    } else {
      alert("status: failed");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
