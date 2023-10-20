import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: Config.BASE_URL,
});

export const getRequest = async <T>(
  url: string,
  params?: AxiosRequestConfig,
) => {
  try {
    const response = await axiosInstance.get<T>(url, params);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

export const postUserData = async (userData: any): Promise<void> => {
  try {
    await axiosInstance.post('/user', userData);
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

const handleRequestError = (error: any) => {
  if (error.response) {
    // The request was made, but the server responded with an error status code
    console.error('Response Data:', error.response.data);
    console.error('Status Code:', error.response.status);
  } else if (error.request) {
    // The request was made, but no response was received
    console.error('No response received:', error.request);
  } else {
    // Something happened in setting up the request, such as an error in the configuration
    console.error('Request Setup Error:', error.message);
  }
};

export default axiosInstance;
