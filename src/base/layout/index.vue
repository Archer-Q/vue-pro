<template>
  <div class="layout">
    <header-bar></header-bar>
    <div class="container">
      <el-menu
        :default-active="activeIndex"
        unique-opened
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        text-color="#fff"
        active-text-color="#fff">
        <sideBar :menuList="menuList"></sideBar>
      </el-menu>
      <router-view class="content" />
    </div>
  </div>
</template>
<script>
import headerBar from "./headerbar";
import sideBar from "./sideBar"
import {menu} from '../../router/menulist'
import {getStorage, setStorage} from '@/utils/index'
import { mapGetters } from 'vuex'
export default {
  name: "layout",
  components: { sideBar, headerBar },
  data() {
    return {
      menuList: menu,
      isCollapse:false,//菜单展开功能
      // activeIndex: "home"
    }
  },
  watch: {
    breadData: {     //深度监听
      handler(newValue, oldValue) {},
      deep: true
    }
  },
  computed: {
    ...mapGetters([
      'activeIndex'
    ]),
  },
  mounted() {
    
  },
  created() {
    var locIndex = sessionStorage.getItem("activeIndex")
    if(locIndex) {
      this.$store.commit("SET_CURINDEX", locIndex);
    }
  },
  methods: {
    toggleClick(){//菜单展开功能
      this.isCollapse=!this.isCollapse;
    },
    handleSelect(key, keyPath) {
      // console.log(key,keyPath);
    },
    handleOpen(key, keyPath) {
      // console.log(key,keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
};
</script>
<style lang="scss">
.container {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  .sidebar {
    width: 200px;
    height: 100%;
    background-color: #5e9cd3;
    ul {
      height: 100%;
      background-color: #5e9cd3;
    }
  }
  .content {
    flex: 1;
    padding: 15px;
    height: 100%;
    overflow-y: auto;
  }
}
</style>