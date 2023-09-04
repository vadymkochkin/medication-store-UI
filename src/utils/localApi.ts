import axios from "axios";

let instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
  }
});

const LocalAPIClient = {
  setToken: (token: string) => {
    instance.defaults.headers.common['Authorization'] = token;
    window.localStorage.setItem('access_token', token);
  },
  getToken: () => {
    return instance.defaults.headers.common['Authorization'];
  },
  get: async (url: string) => {
    const res = await instance.get(url).catch(err => {
      return err.response;
    });
    return res?.data;
  },
  post: async (url: string, body: any) => {
    const res = await instance.post(url, body).catch(err => {
      return err.response;
    });
    return res?.data;
  },
  put: async (url: string, body: any) => {
    const res = await instance.put(url, body).catch(err => {
      return err.response;
    });
    return res?.data;
  },
  delete: async (url: string) => {
    const res = await instance.delete(url).catch(err => {
      return err.response;
    });
    return res?.data;
  }
}

instance.interceptors.request.use(
  async (config: any) => {
    const value = window.localStorage.getItem('access_token');
    if (value) {
      config.headers = {
        'Authorization': `${value}`,
        'Content-Type': 'application/json',
        'Accept': '*/*',
      }
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default LocalAPIClient;