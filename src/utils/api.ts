import axios from "axios";

let instance = axios.create({
  baseURL: 'https://api.trypureblue.com/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    "Site-Token": "123456",
  }
});

const APIClient = {
  setToken: (token: string) => {
    instance.defaults.headers.common['Authorization'] = token;
  },
  get: async (url: string) => {
    const res = await instance.get(url).catch(err => {
      return err.response;
    });
    return res.data;
  },
  post: async (url: string, body: any) => {
    const res = await instance.post(url, body).catch(err => {
      console.log(err);
      return err.response;
    });
    return res?.data;
  },
  put: async (url: string, body: any) => {
    const res = await instance.put(url, body).catch(err => {
      return err.response;
    });
    return res.data;
  },
  delete: async (url: string) => {
    const res = await instance.delete(url).catch(err => {
      return err.response;
    });
    return res.data;
  }
}

export default APIClient;