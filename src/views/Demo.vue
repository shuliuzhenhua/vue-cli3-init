<template>
    <div>
      demo
    </div>
</template>

<script>
export default {
  name: 'Demo',
  created () {
    /**
     * get 请求
     */
    this.$http.get('mall/').then(res => {
      console.log(res);
    });

    /**
     * 登录
     */
    this.$http.post('token/user', {
      mobile: 'xxxx',
      password: 'xxxx'
    }).then(res => {
      console.log(res)
    });

    /**
     * 获取不存在的商品
     * @type {number}
     */
    let goodsId = 115315;
    this.$http.get('mall/goods/' + goodsId).then((res) => {
      console.log(res);
    });

    /**
     * 发送普通的 axios 请求不设置拦截器
     */
    this.$http.request({
      url: 'mall/goods/' + goodsId,
      handle: true
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped lang="stylus">

</style>
