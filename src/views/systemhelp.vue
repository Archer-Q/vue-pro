<template>
  <div class="system-help">
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>操作手册</h3>
          </div>
          <div v-for="(item, index) in manualData" :key="index" class="flexLine">
            <p>{{item.title}}</p>
            <el-button type="text" @click="handleCheck(item.url)">查看</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>操作视频</h3>
          </div>
          <div v-for="(item, index) in manualVideoData" :key="index" class="flexLine">
            <p>{{item.title}}</p>
            <el-button type="text" @click="handleCheck(item.url)">查看</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getSystemhelpData } from '@/api/api'
export default {
  name: "systemhelp",
  data() {
    return {
      manualData: [],
      manualVideoData: [],
    }
  },
  mounted() {
    getSystemhelpData().then(res => {
      if(res.data.code === "200") {
        this.manualData = res.data.data.manual;
        this.manualVideoData = res.data.data.manualVideo;
        console.log(this.manualData)
      }
    })
  },
  methods: {
    handleCheck(path){
      window.open(path, "_blank");
    }
  },
}
</script>