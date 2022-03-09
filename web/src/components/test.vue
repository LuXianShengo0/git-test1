<template>
  <div class="test">
    <slot name="header"></slot>
    <slot name="content" :text="account" :record="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    
  },
  data(){
    return {
      user: ['张三','李四',"王五"],
      account:"ray",
    }
  },
  mounted() {
    this.$bus.$on('updateOne',(data) => {
      console.log("全局事件总线被触发");
      this.account = data
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
