<template>
  <div id="app">
      <div class="content">
        <div class="nav">
          <div class="nav-left" v-if="!multipleSelection[0]">
            <el-button type="primary" size="small" round @click="dialogFormVisible = true">
              <i class="el-icon-plus" style="margin-right: 5px;"></i>创建数据
            </el-button>

            <el-dialog title="" :visible.sync="dialogFormVisible">
              <market-activity :dialogClose="dialogClose" @handleSubmit="handleSubmit"></market-activity>
            </el-dialog>
            <el-button type="primary" size="small" round>
              
                <i class="el-icon-upload2" style="margin-right: 5px;"></i>上传数据
            </el-button>
            <el-button @click="handleDownLoad" type="primary" size="small" round>
              <i class="el-icon-download" style="margin-right: 5px;"></i>下载数据
            </el-button>
          </div>
          <div class="nav-left" v-if="multipleSelection[0]">
            <el-button type="primary" 
            size="small" 
            round 
            @click="handleDelete">
              <i class="el-icon-plus" style="margin-right: 5px;"></i>删除数据
            </el-button>
            <el-button @click="handleDownLoad" type="primary" size="small" round>
              <i class="el-icon-download" style="margin-right: 5px;"></i>选择下载数据
            </el-button>
          </div>
          <div class="nav-right">
            <el-input
              placeholder="活动名称"
              class="input-with-select input"
              @change="handleSearch"
              v-model="formData.name"
              prefix-icon="el-icon-search">
            </el-input>
            <el-input
              placeholder="负责人"
              class="input-with-select input"
              @change="handleSearch"
              v-model="formData.owner"
              prefix-icon="el-icon-search">
            </el-input>
            <el-date-picker
              v-model="formData.startDate"
              @change="handleSearch"
              class="input"
              align="right"
              type="date"
              placeholder="开始时间">
            </el-date-picker>
            <el-date-picker
              v-model="formData.endDate"
              @change="handleSearch"
              class="input"
              align="right"
              type="date"
              placeholder="结束时间">
            </el-date-picker>
          </div>
        </div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="name"
            label="活动名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="owner"
            label="所有者"
            width="120">
          </el-table-column>
          <el-table-column
            prop="cost"
            label="成本"
            width="120">
          </el-table-column>
          <el-table-column
            prop="startDate"
            label="开始日期"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="endDate"
            label="截至日期"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            
            </template>
          </el-table-column>
        </el-table>
        <page-break class="page" :pageInfo="pageInfo" @handleClick="handleAllActivity"></page-break>
      </div>
  </div>
</template>

<script>
import MarketActivity from '@/dialog/MarketActivity.vue';
import PageBreak from '@/components/PageBreak.vue';
import { mapActions } from 'vuex';
export default {
  components:{
    MarketActivity,
    PageBreak
  },
  mounted(){
    const result = this.allActivity(Object.assign({}, this.formData, {pageNumber:1}))
    result.then((resp) => {
      this.pageInfo = resp
      this.tableData = resp.list
    })
  },
  data() {
    return {
      tableData: [
      ],
      formData:{
        name:'',
        owner:'',
        startDate:'',
        endDate:''
      },
      deleteId:[],
      multipleSelection: [],
      dialogFormVisible: false,
      pageInfo:{},
    }
  },
  methods: {
    ...mapActions('market',[
      'allActivity',
      'deleteActivity',
      'createActivity',
      'downLoadActivity'
    ]),
    async handleSubmit(form) {
        let result = await this.createActivity(form)
        this.$refs.form.resetFields()
        this.$emit("refreshPage")
        this.dialogClose()
    },
    handleDelete(){
      this.deleteActivity(this.deleteId)
      this.refreshPage()
    },
    refreshPage(){
      const result = this.allActivity(Object.assign({}, this.formData, {pageNumber:1}))
      
      result.then((resp) => {
        this.pageInfo = resp
        this.tableData = resp.list
      })
    },
    handleSearch(){
      this.refreshPage()
    },
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
      this.deleteId = val.map((p) => p.id)
      this.multipleSelection = val;
    },
    dialogClose(){
      if(this.dialogFormVisible){
        this.dialogFormVisible = false;
      }
    },
    async handleAllActivity(pageNumber){
      let result = await this.allActivity(Object.assign(this.formData,{pageNumber:pageNumber}))
      this.pageInfo = result
      this.tableData = result.list
    },
    async handleDownLoad(){
      let result = this.downLoadActivity()
      result.then((response) => {
        //创建a标签
        let elink = document.createElement('a')
        document.body.appendChild(elink)
        elink.style.display = 'none'
        elink.download = "活动信息表.xls"
        //操作blob对象
        let blob = response
        elink.href = window.URL.createObjectURL(blob)
        elink.click()
        //移除a标签
        document.removeChild(elink)
        window.URL.revokeObjectURL(elink.href)
      })
    },
    async handleUpload(e){
      console.log(e)
    }
  }
}
</script>

<style scoped lang="less">
#app{
  margin-top: 40px;
  width: auto;
  height:auto;
  display: flex;
  justify-content: center;
  .content{
    width:1100px;
    height:600px;
    .nav{
      height: 50px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      .nav-left{
        height: 40px;
        padding-top: 5px;
        margin-left:20px;
      }

      .el-button{
        margin-left:20px;
      }
      .nav-right{
        margin-right: 20px;
        display: flex;
        float: left;
        .input{
          width: 150px;
          margin-right: 20px;
        }
      }
    }
    .el-table{
      height:400px;
    }
  }
}
</style>