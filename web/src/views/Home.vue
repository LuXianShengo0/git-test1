<template>
  <div class="home" ref="homeRef">
    <!-- 路由meta数据获取 -->
    <div>{{ $route.meta.name }}</div>
    <test ref="testRef">
      <template v-slot:header>123</template>
      <template v-slot:content="slotProps">{{ slotProps.text }}</template>
      <template v-slot:footer>789</template>
    </test>

    <div class="firstName" ref="firstName">{{ firstName }}</div>
    <div data-num="6" @click="getdata">{{ firstName }}</div>
    <jjlbs-data-table :tableData="tableData" :tablecolumns="tablecolumns" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import test from "../components/test.vue";
import jjlbsDataTable from "../components/JjlbsTable.vue";

export default {
  name: "Home",
  data() {
    return {
      firstName: "张3",
      lastName: "李4",
      localCount: 7,
      arr: [],
      objText: {
        obj1: "1",
        obj2: "2",
      },
      tablecolumns: [
        // {
        //   type: "index",
        //   label: "序号",
        // },
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "address",
          label: "地址",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],

    };
  },
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      count: (state) => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: "count",

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount;
      },
      userInfor: (state) => state.userInfor,
    }),
    secondChange() {
      return this.objText.obj2;
    },
  },
  components: {
    test,
    jjlbsDataTable,
  },
  methods: {
    async test() {
      const res = await this.$http({
        method: "post",
        url: "login",
        //表单 Form Data
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded",
        // },
        //json字符串 Request Payload
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // post请求参数
        data: { 
          USER_ACCOUNT: "admin",
          PASSWORD:"fae0b27c451c728867a567e8c1bb4e53"
        },
        // transformRequest: [
        //   function (data) {
        //     var oMyForm = new FormData();
        //     oMyForm.append("bar", data.bar);
            
        //     console.info(oMyForm);
        //     return oMyForm;
        //   },
        // ],
        // get请求参数
        // params: {
        //   ID: 12345,
        // },
      }).catch((error) => error);
      this.firstName = "王5";
      this.objText.obj1 = "3";
      
      setTimeout(()=>{
        this.objText.obj2 = "4";

      },2000)
      // 修改vuex数据
      this.$store.commit('UpDateUserInfor',res[0])
      console.log(this.$refs.testRef.account);
    },
    getdata(){
      console.log(Event.target.dataset.num)
    }
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
    this.test();
    this.$bus.$emit('updateOne',this.localCount)
  },
  watch: {
    firstName: function (val) {
      console.log("监测firstName改变开始");
      this.$nextTick(() => {
        console.log(val);
      });
      console.log("监测firstName改变结束");
    },
    lastName: function (val) {
      this.lastName = this.firstName + " " + val;
    },
    objText: {
      handler: function (newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      },
      deep: true,
    },
    secondChange() {
      console.log("obj2属性值变化了");
    },
  },
};
</script>
<style lang="less" scoped>
</style>

