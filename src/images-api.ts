import axios, { AxiosResponse } from 'axios';
const ACCESS_KEY = '08FMaa3-Wm1U8KQRLB6FlNns-YAbUB6CZpX2Lc1Mgcc';
const PER_PAGE = 12;

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async <T>(
  query: string,
  page: number
): Promise<AxiosResponse<T>> => {
  const response = await axios.get<T>(
    `/search/photos?query=${query}&page=${page}&per_page=${PER_PAGE}&orientation=landscape&client_id=${ACCESS_KEY}`
  );

  return response;
};
