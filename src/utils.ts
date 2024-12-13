import axios from 'axios';
import fs from 'fs';

export const get = async <T>(url: string, params?: { [key: string]: any }) => {
  return axios.get<T>(url, { params }).then((response) => {
    console.log(`GET Response Status: ${response.status}`);
    return response.data;
  });
};

export const post = async <T>(
  url: string,
  data?: { [key: string]: any },
  params?: { [key: string]: any },
) => {
  return axios.post<T>(url, data, { params }).then((response) => {
    console.log(`POST Response Status: ${response.status}`);
    return response.data;
  });
};

export const writeFile = async (file: string, data: string) => {
  return fs.writeFileSync(file, data, 'utf8');
};

export const readJSONFromFile = async (file: string) => {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};
