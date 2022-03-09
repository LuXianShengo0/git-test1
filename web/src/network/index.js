import axios from 'axios';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const requests = (config) => {
  const server = axios.create({
    baseURL: "/api/",//基础路径
    timeout: 5000,//超时时间
  })

  // 请求拦截器
  server.interceptors.request.use(function (config) {
    NProgress.start()
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // 相应拦截器
  server.interceptors.response.use(function (response) {
    NProgress.done();
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

  return server(config);
}