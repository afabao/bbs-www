<template>
    <div>
      <div>
        <el-input v-model="search" placeholder="请输入内容" style="width: 200px;margin-top: 5px;margin-left: 5px;"></el-input>
        <el-button type="primary" size="small" style="margin-top: 5px;margin-left: 5px" @click="searchEmployee">查询</el-button>
        <el-button type="primary" size="small" style="margin-top: 5px;margin-left: 5px" @click="addEmployee()">新增</el-button>
        <el-button type="primary" size="small" style="margin-top: 5px;margin-left: 5px" @click="editEmployee()">修改</el-button>
      </div>
      <div style="margin-top: 5px">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          stripe="true"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <!--      //分页-->
        <div class="block">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
      <!-- 弹窗表格-->
      <div>
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
          <el-form :model="addOrEditEmployeeForm">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="addOrEditEmployeeForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="addOrEditEmployeeForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Employee",
      data() {
        return {
          //表格数据
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          multipleSelection: [],

          //查询数据
          search:'',

          //点击可见
          dialogFormVisible: false,

          //弹出员工表单数据
          addOrEditEmployeeForm:{

          },

          //弹出框提示
          title:'',

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

        //查询员工按钮
        searchEmployee(){

        },

        //弹出新增页面按钮
        addEmployee(){
          this.dialogFormVisible = true
          this.title = 'Add Employee'
        },

        //弹出修改页面按钮
        editEmployee(){
          this.dialogFormVisible = true
          this.title = 'Edit Employee'
        }
      }
    }
</script>

<style scoped>

</style>
