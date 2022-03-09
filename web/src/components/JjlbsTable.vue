<!--
 * @Author: kds
 * @Date: 2022-02-18 23:12:45
 * @LastEditTime: 2022-02-21 10:39:19
 * @LastEditors: kds
 * @Description: 
 * @FilePath: \jjlbs-workspace\src\components\jjlbsDataTable.vue
-->
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <template v-for="(item,index) in tablecolumns">
        <el-table-column :prop="item.prop" :label="item.label"> </el-table-column>
      </template>
      
      
    </el-table>
  </div>
</template>

<script>
export default {
  name: "JJLBSDataTable",
  props: ["tableData","tablecolumns"],
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>