<template>
  <div class="home" v-cloak>
    <navbar class="homebar"></navbar>
    <tab-control
      :title="['流行','新款','精选']"
      @tabControl="tabControl"
      ref="tabControl2"
      :class="{tab:fixedShow}"
      v-show="fixedShow"
    ></tab-control>
    <scroll class="wrapper" ref="scroll" @scrollTop="contentTop" @loadMore="loadMore">
      <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <homeFeatrue></homeFeatrue>
      <tab-control :title="['流行','新款','精选']" @tabControl="tabControl" ref="tabControl1"></tab-control>
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
//utils
import debounce from "common/utils";
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
      isShow: false,
      fixedShow: false,
      tabTop: 0,
      save: 0
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
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemLoadImg", () => {
      refresh();
      // this.$refs.scroll.refresh();
    });
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //backTop
    backTop() {
      this.$refs.scroll.scrollTop();
    },
    contentTop(position) {
      this.isShow = -position.y > 1000;
      this.fixedShow = -position.y > this.tabTop;
    },
    //loadMore
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    //获取tabControl的offsetTop
    imageLoad() {
      // console.log(this.$refs.tabControl1.$el.offsetTop+this.$refs.tabControl1.$el.offsetParent.offsetTop);

      this.tabTop =
        this.$refs.tabControl1.$el.offsetTop +
        this.$refs.tabControl1.$el.offsetParent.offsetTop;
    }
  },
  computed: {
    current() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scroll.scrollTop(0, this.save, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.save = this.$refs.scroll.getScrollY();
  }
};
</script>

<style scope>
.home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
}
.homebar {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 46px;
}
.tab {
  position: relative;
  z-index: 90;
}
</style>