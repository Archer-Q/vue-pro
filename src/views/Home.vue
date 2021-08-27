<template>
  <div class="home">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3 class="title">关键信息</h3>
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit"><svg-icon iconClass="edit"></svg-icon> 编辑</el-button>
      </div>
    </el-card>
    <el-card class="box-card ">
      <div slot="header" class="clearfix">
        <h3 class="title">快捷入口</h3>
      </div>
      <div class="quickEntry" v-for="(item, index) in quickEntryData" :key="index" @click="handleRoute(item.url)">
        <h5>{{item.title}}</h5>
        <img :src="item.ImgUrl" alt="">
        <p>包含: {{item.content}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getQuickEntryData } from '@/api/api'
export default {
  name: 'Home',
  data() {
    return {
      quickEntryData:[]
    }
  },
  mounted() {
    getQuickEntryData().then(res => {
      if(res.data.code === "200") {
        this.quickEntryData = res.data.data.slice(0, 5);
      }
    })
  },
  methods: {
    handleEdit(){
      this.$router.push("/information")
    },
    handleRoute(path){
      window.open(path, "_blank");
    }
  },
}
</script>
<style lang="scss">
  .home {
    .el-card {
      margin-bottom: 4vh;
      .clearfix {
        text-align: left;
        h3 {
          display: inline-block
        }
      }
    }
    .el-card__body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .quickEntry {
        width: calc(18% - 2px);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        margin: 1vh 1%;
        cursor: pointer;
        h5 {
          line-height: 6vh;
          font-size: 14px;
        }
        img {
          width: 100%;
          height: 15vh;
        }
        p {
          padding: 2vh 12px;
          opacity: .6;
        }
      }
    }
  }
</style>
