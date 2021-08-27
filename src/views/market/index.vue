<template>
  <div class="market">
    <div v-for="(item, index) in marketData" :key="index" class="market-item" @click="handleDetail">
      <img :src="item.ImgUrl" alt />
      <div class="market-detail">
        <h5>{{item.title}}</h5>
        <p class="detail">{{item.content}}</p>
        <p class="tip">{{item.apply}}</p>
        <p class="tip">{{item.charge}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getMarketListData } from "@/api/api";
export default {
  name: "market",
  data() {
    return {
      marketData: [],
    };
  },
  mounted() {
    getMarketListData().then((res) => {
      if (res.data.code === "200") {
        this.marketData = res.data.data;
      }
    });
  },
  methods: {
    handleDetail(){
      let routerdata = this.$router.resolve({
        name: "order-intention",
        // query: {
        //   name: "market"
        // }
      });
      let newhref = routerdata.href;
      window.open(newhref, "_blank");
    }
  },
};
</script>
<style lang="scss">
.market {
  height: 100%;
  overflow-y: auto;
  .market-item {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vh;
    padding: 10px;
    transition: all .3s;
    border: 1px solid transparent;
    img {
      width: 270px;
      height: 150px;
    }
    .market-detail {
      flex: 1;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h5 {
        font-weight: bold;
        text-align: left;
        font-size: 14px;
      }
      p {
        text-align: left;
        line-height: 1.5em;
        padding-top: 1vh;
        &.detail {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border: 1px solid #EBEEF5;
      border-radius: 4px;
    }
  }
}
</style>