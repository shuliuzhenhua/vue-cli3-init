import Mock from 'mockjs';
import Url from './url';

/**
 * 这里实际是返回 400 的 http 状态码，mockjs 模拟不出来
 */
Mock.mock(Url + 'mall/goods/115315', 'get', {
  "msg": "商品不存在",
  "error_code": 100010,
  "data": null,
  "request_url": "/v1//mall/goods/1000024"
});
