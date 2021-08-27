<template>
  <div class="sidebar">
    <template v-for="item in this.menuList">
      <el-submenu v-if="item.children && item.children.length >= 1" :key="item.id" :index="item.name">
        <template slot="title">
          <span slot="title">{{item.meta.title}}</span>
        </template>
        <sideBar :menuList="item.children"></sideBar>
      </el-submenu>
      <el-menu-item v-else :index="item.name" :key="item.id" @click="handleRoute(item)">
        <svg-icon :iconClass="item.meta.icon"></svg-icon><span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: "sideBar",
  props:['menuList'],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleRoute(menu){
      console.log(menu)
      this.$store.commit("SET_CURINDEX", menu.name);
      this.$router.push(menu.path);
    }
  },
};
</script>
<style lang="scss">
.sidebar {
  .el-menu-item {
    text-align: left;
    font-weight: 500;
    height: 48px;
    line-height: 48px;
    span {
      padding-left: 10px;
    }
    &.is-active, &:hover {
      background-color: #2470b8;
    }
    &:focus {
      outline: 0;
    }
  }
}
</style>