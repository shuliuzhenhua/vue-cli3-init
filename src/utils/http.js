import axios from 'axios';
import { Dialog } from 'vant';

axios.defaults.baseURL = process.env.VUE_APP_REQUEST_URL;
axios.defaults.timeout = 30 * 1000;

// 创建实例
const instance = axios.create({
  headers: {
    token: localStorage.getItem('token'), // 设置header 默认值，根据自己情况而定
  },
});

instance.interceptors.response.use(
  res => {
    // 请求成功时的处理
    return res;
  },
  err => {
    console.log(JSON.stringify(err.response, null, 4));

    if (err.response.data.error_code === 10003) {
      // 需要重新登录
      console.log('需要重新登录');
      // 定义需要处理的代码

      return Promise.reject(err);
    }

    // 如果返回的是自己网站的错误应该是有这个data的
    if (err.response.data && err.response.data.msg) {
      // 3、普通异常，比如参数错误或者其他，直接弹出错误就可以的
      // 这里可以用一个弹出提示
      return Dialog.alert({
        message: err.response.data.msg
      }).then(() => {
        return Promise.reject(err.response.data)
      });
    }

    // 请求失败时的处理
    return Promise.reject(err);
  }
);

const http = {
  request (options) {
    return instance(options)
  },
  get (url, params) {
    return instance.get(url, { params })
  },
  post (url, data) {
    return instance.post(url, data)
  },
  put (url, data) {
    return instance.put(url, data)
  },
  delete (url, data) {
    return instance.delete(url, data)
  }
}

export default http
