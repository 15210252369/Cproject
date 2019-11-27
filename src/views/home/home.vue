<template>
  <div class="home">
    <navbar class="homebar"></navbar>
    <scroll class="wrapper" ref="scroll" @scrollTop="contentTop" @loadMore="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <homeFeatrue></homeFeatrue>
      <tab-control :title="['流行','新款','精选']" @tabControl="tabControl"></tab-control>
      <goods-list :goods="current"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";
import homeSwiper from "./children/homeSwiper";
import recommend from "./children/homeRecommned";
import homeFeatrue from "./children/homeFeature";
//better scroll
import scroll from "components/common/scroll/scroll";

import tabControl from "components/content/tabControl/tabControl";
import goodsList from "components/content/goods/goodslist";
//backTop
import backTop from "components/content/backTop/backTOP";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false
    };
  },
  components: {
    navbar,
    homeSwiper,
    recommend,
    homeFeatrue,
    tabControl,
    goodsList,
    scroll,
    backTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = (this.goods[type].page += 1);
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        // this.goods[type].page += 1;
        this.$refs.scroll.scrollFinish();
      });
    },
    tabControl(index) {
      switch (index) {
        case (index = 0):
          this.currentType = "pop";
          break;
        case (index = 1):
          this.currentType = "new";
          break;
        case (index = 2):
          this.currentType = "sell";
          break;
      }
    },
    //backTop
    backTop() {
      this.$refs.scroll.scrollTop();
    },
    contentTop(position) {
      this.isShow = -position.y > 1000;
    },
    //loadMore
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    }
  },
  computed: {
    current() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style scope>
.homebar {
  background-color: var(--color-tint);
  color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 46px;
}
</style>