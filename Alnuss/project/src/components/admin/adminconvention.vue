<template>
  <div class="admincontent">
  <h3>我的预约</h3>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      align="center"
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      align="center"
      prop="name"
      label="设计师"
      width="120">
    </el-table-column>
    <el-table-column
      prop="num"
      align="center"
      label="预约编号"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      label="订单日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="预约地址"
      width="320"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
        prop="state"
        align="center"
      label="预约状态"
      width="120">
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="info"
          @click="handleEdit(scope.$index, scope.row)">取消预约</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  </div>
</template>

<script>
    export default {

      name: "adminconvention",

      data() {
        return {
          tableData3: [{
            name: '王小虎',
            num:'008',
            address: '上海市普陀区金沙江路 1518 弄',
            date: '2016-05-03',
            state:'预约成功'
          }, {
            name: '王小虎',
            num:'009',
            address: '上海市普陀区金沙江路 1518 弄',
            date: '2016-05-03',
            state:'预约成功'
          }, {
            name: '王小虎',
            num:'010',
            address: '上海市普陀区金沙江路 1518 弄',
            date: '2016-05-03',
            state:'预约成功'
          }, {
            name: '王小虎',
            num:'011',
            address: '上海市普陀区金沙江路 1518 弄',
            date: '2016-05-03',
            state:'预约成功'
          }, {
            name: '王小虎',
            num:'012',
            address: '上海市普陀区金沙江路 1518 弄',
            date: '2016-05-03',
            state:'预约成功'
          }, {
            name: '王小虎',
            num:'013',
            address: '上海市普陀区金沙江路 1518 弄',
            date: '2016-05-03',
            state:'预约成功'
          }],
          multipleSelection: []
        }
      },

      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleEdit(index, row) {
          console.log(index, row);
        }
      }

    }
</script>

<style scoped lang="less">
.admincontent{
  padding: 20px 45px;
  box-sizing: border-box;
  >h3{
    text-align: left;
    color: rgba(0,0,0,.4);
  }
}

</style>
