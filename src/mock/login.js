import Mock from 'mockjs';
import Url from './url';

Mock.mock(Url + 'token/user', 'post', {
  "msg": "ok",
  "error_code": 0,
  "data": {
    "token": "e5651daead83050315a0475b3253b137"
  },
  "request_url": "/v1/token/user"
});
