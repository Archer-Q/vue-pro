<template>
  <div class="headerbar">
    <p class="logo">
      "智缘"企业信息化支撑平台
    </p>
    <div class="navigation">
      <p class="market" @click="handleMarket">
        <svg-icon iconClass="shop"></svg-icon><span>应用商城</span>
      </p>
      <div class="userName">
        <p class="user" @mouseenter="showMenu = true">
          <span :class="{hoverStatus: showMenu === true}"><svg-icon iconClass="user"></svg-icon></span>
          系统管理员</p>
				<transition name="el-zoom-in-top">
					<div class="menus" v-show="showMenu" @mouseleave="showMenu = false">
            <div :class="['menuItem', {'active': curIndex === i}]" v-for="(ele, i) in menus" :key="i" @click="changeType(ele, i)">
              <p><svg-icon :iconClass="ele.icon"></svg-icon>{{ele.title}}</p>
            </div>
          </div>
				</transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerbar",
  data() {
    return {
      market: "market",
      query: "",
      showMenu: false,
      curIndex:0,
      menus: [
        {title: "个人中心", icon: "person"},
        {title: "退出", icon: "quit"}
      ]
    }
  },
  methods: {
    handleMarket() {
      this.$router.push('/market')
      this.$store.commit("SET_CURINDEX", "");
    },
    changeType(ele, i){
      if(ele.title === "退出") {
        this.$router.push('/login')
      }
    },
  }
};
</script>
<style lang="scss">
.headerbar {
  background-color: #0b589d;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  p {
    line-height: 60px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
  p.market {
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 0 5px;
    transition: all .3s;
    span {
      padding-left: 6px;
    }
    &:hover {
      background: #054c8c;
    }
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    p.user {
      margin-left: 15px;
      line-height: 60px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      span {
        display: inline-block;
        width: 24px;
        line-height: 24px;
        margin-top: 18px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 50%;
        transition: all .3s;
      }
      &:hover span, .hoverStatus{
        background-color: #fff;
        color: #135a9b;
      }
    }
    div.userName {
      div.menus {
        width: 140px;
        border-radius: 3px;
        position: absolute;
        top: 62px;
        right: 1px;
        z-index: 99;
        background-color: lightgreen;
        &:before {
          display: block;
          content: "";
          position: absolute;
          top: -2px;
          right: 10px;
          width: 8px;
          height: 8px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          background: #105dac;
          z-index: -1;
        }
        .menuItem {
          width: 100%;
          height: 36px;
          line-height: 36px;
          text-align: left;
          text-indent: 1.5em;
          font-size: 12px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.6);
          background: #105dac;
          margin-top: 0;
          border-bottom: 1px solid #0e447c;
          transition: all .3s;
          p {
            font-size: 14px;
            line-height: 36px;
            .svg-icon {
              padding-right: 10px;
            }
          }
          &:hover {
            background: #0e447c;
          }
        }
      }
    }
  }
}
</style>