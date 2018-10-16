import Mock from 'mockjs';
import Url from './url';

/**
 * get 请求获取数据
 */
Mock.mock(Url + 'mall/', 'get', {
  "msg": "ok",
  "error_code": 0,
  "data": {
    "banner": [
      {
        "image": "http://www.test.com/data/upload/shop/common/default_goods_image_240.gif",
        "type": "",
        "data": ""
      }
    ],
    "theme": [
      {
        "title": "新品上架",
        "item": [
          {
            "goods_id": "100004",
            "goods_name": "纪梵希2018秋冬新款明线暗黑字母套头帽衫 黑色 M",
            "goods_promotion_price": "89.00",
            "goods_image": "http://www.test.com/data/upload/shop/store/goods/1/1_05898250923514214_360.jpg"
          },
          {
            "goods_id": "100016",
            "goods_name": "巴黎 18 早秋爆款 绿色logo 字母连帽卫衣 黑色 S",
            "goods_promotion_price": "198.00",
            "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
          },
          {
            "goods_id": "100021",
            "goods_name": "Faith connexion 18 早春新款编制格子衫 黑色 S",
            "goods_promotion_price": "249.00",
            "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
          },
          {
            "goods_id": "100052",
            "goods_name": "Dlor 18 早秋新款 18k金先小蜜蜂连帽衫 m",
            "goods_promotion_price": "198.00",
            "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
          }
        ]
      },
      {
        "title": "热销商品",
        "item": [
          {
            "goods_id": "100008",
            "goods_name": "VANS/范斯 SK8-HI 38 DX 安纳海姆撞色高帮滑板鞋板鞋 米黄色 40",
            "goods_promotion_price": "249.00",
            "goods_image": "http://www.test.com/data/upload/shop/store/goods/1/1_05898258928540835_360.jpg"
          },
          {
            "goods_id": "100009",
            "goods_name": "VANS/范斯 SK8-HI 38 DX 安纳海姆撞色高帮滑板鞋板鞋 红色 38",
            "goods_promotion_price": "249.00",
            "goods_image": "http://www.test.com/data/upload/shop/store/goods/1/1_05898259031854513_360.jpg"
          }
        ]
      }
    ],
    "products": {
      "title": "猜你喜欢",
      "item": [
        {
          "goods_id": "100008",
          "goods_name": "VANS/范斯 SK8-HI 38 DX 安纳海姆撞色高帮滑板鞋板鞋 米黄色 40",
          "goods_promotion_price": "249.00",
          "goods_image": "http://www.test.com/data/upload/shop/store/goods/1/1_05898258928540835_360.jpg"
        },
        {
          "goods_id": "100011",
          "goods_name": "VANS/范斯 SK8-HI 38 DX 安纳海姆撞色高帮滑板鞋板鞋 红色 40",
          "goods_promotion_price": "249.00",
          "goods_image": "http://www.test.com/data/upload/shop/store/goods/1/1_05898259031854513_360.jpg"
        },
        {
          "goods_id": "100015",
          "goods_name": "celine翻盖拼色 绿色",
          "goods_promotion_price": "999.00",
          "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
        },
        {
          "goods_id": "100014",
          "goods_name": "celine翻盖拼色 红色",
          "goods_promotion_price": "999.00",
          "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
        },
        {
          "goods_id": "100017",
          "goods_name": "巴黎 18 早秋爆款 绿色logo 字母连帽卫衣 黑色 M",
          "goods_promotion_price": "198.00",
          "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
        },
        {
          "goods_id": "100052",
          "goods_name": "Dlor 18 早秋新款 18k金先小蜜蜂连帽衫 m",
          "goods_promotion_price": "198.00",
          "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
        },
        {
          "goods_id": "100030",
          "goods_name": "Adidas Superstar原装贝壳头 白绿经典配色 白绿色 40",
          "goods_promotion_price": "498.00",
          "goods_image": "http://www.test.com/data/upload/shop/common/default_goods_image_360.gif"
        }
      ]
    }
  },
  "request_url": "/v1//mall"
});


