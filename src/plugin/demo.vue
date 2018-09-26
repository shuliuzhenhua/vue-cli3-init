<template>
    <div>
      <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    </div>
</template>

<script>
import Vue from 'vue';
import { Cell } from 'vant';
Vue.use(Cell);
export default {
  name: 'demo',
};
</script>

<style scoped lang="stylus">

</style>
