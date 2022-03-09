<template>
  <div class="Login" >
    
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      userInfor: (state) => state.userInfor,
    }),
  },
  components: {

  },
  methods: {
    
  },
  beforeCreate() {
    // 实例初始化之后
  },
  created() {
    // 实例创建完成
  },
  beforeMount() {
    // 挂载开始之前被调用
  },
  mounted() {
    
  },
  watch: {

  },
};
</script>
<style lang="less" scoped>

</style>

