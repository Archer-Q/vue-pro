<template>
  <div class="information">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>关键信息列表</h3>
      </div>
      <el-table
        :data="tableInfo.tableData"
        border
        :header-cell-style="{background:'#4c9fea',color:'white'}"
        :cell-style="{padding:'4px 0'}"
      >
        <el-table-column
          v-for="(item, index) in tableInfo.columns"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :key="index"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.isEdit">
              <el-input size="mini" placeholder="请输入内容" v-model="tableInfo.sel[item.prop]"></el-input>
            </span>
            <span v-else>{{scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row,scope.$index,true,'changable')"
              type="text"
              size="small"
            >{{scope.row.isEdit?'保存':"修改"}}</el-button>
            <el-button
              v-if="!scope.row.isEdit"
              type="text"
              size="small"
              @click="handleClick(scope.row,scope.$index,false,'deletable')"
            >删除</el-button>
            <el-button
              v-else
              type="text"
              size="small"
              @click="handleClick(scope.row,scope.$index,false,'cancellable')"
            >取消</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button class="addbtn" @click="handleAdd()">
        <svg-icon iconClass="add"></svg-icon>添加
      </el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "information",
  data() {
    return {
      tableInfo: {
        sel: null,
        columns: [
          {
            prop: "keyInfo",
            label: "关键信息",
          },
          {
            prop: "pubTime",
            label: "发布时间",
            width: "210",
          },
        ],
        tableData: [],
      },
      saveBtn: "保存",
      cancelBtn: "取消",
    };
  },
  mounted() {},
  methods: {
    addSetOption() {
      this.tableInfo.tableData.map(
        (item) =>
          function () {
            item.$set(this.tableInfo.tableData[i], isEdit, false);
          }
      );
    },

    handleAdd(row) {
      this.addSetOption();
      if (this.tableInfo.tableData.length == 8) {
        this.$message.warning("对不起，您最多输入8条数据");
        return false;
      } else {
        for (let i of this.tableInfo.tableData) {
          if (i.isEdit) {
            return this.$message.warning("请先保存当前编辑项");
          }
        }
        let col = {
          keyInfo: "",
          pubTime: "",
          isEdit: true,
        };
        this.tableInfo.tableData.push(col);
        this.tableInfo.sel = JSON.parse(JSON.stringify(col));
      }
    },
    handleClick(row, index, flag, manipulation) {
      let temp_value = JSON.parse(JSON.stringify(row));

      if (!flag) {
        // 删除或者取消
        if (manipulation == "deletable") {
          this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then(() => {
              this.tableInfo.tableData.splice(index, 1);
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除",
              });
            });
          return row.isEdit;
        } else if (manipulation == "cancellable") {
        }
        return (row.isEdit = !row.isEdit);
      }
      if (row.isEdit) {
        //当前选择保存
        let rowdata = JSON.parse(JSON.stringify(this.tableInfo.sel));
        for (let k in rowdata) {
          if (rowdata[k] !== "") {
            row[k] = rowdata[k];
            row.isEdit = false;
          } else {
            this.$message.warning("您尚未对数据进行任何改变");
            break;
          }
        }
      } else {
        //当前为修改
        this.tableInfo.sel = JSON.parse(JSON.stringify(row));
        row.isEdit = true;
      }
    },
  },
};
</script>
<style lang="scss">
.information {
  // .el-card__header {
  //   padding: 10px 20px 0;
  //   border-bottom: 0;
  // }
  .addbtn.el-button {
    width: 98%;
    margin: 4vh auto 0;
  }
  h3 {
    text-align: left;
  }

  .el-table__header tr,
  th {
    padding: 6px;
  }
}
</style>