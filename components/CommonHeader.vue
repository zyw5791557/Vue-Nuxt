<template>
    <header class="header-container">
        <div class="container">
            <nuxt-link to="/" class="logo">
                <img src="~assets/images/logo.png" alt="logo" />
            </nuxt-link>
            <nav class="nc_clearfix">
                <nuxt-link v-for="(item,index) in routerLinkList" :key="index" :class="{ active: item.active }" :to="item.url">{{ item.title }}</nuxt-link>
            </nav>
            <div class="contact">
                <a href="mailto:xiaomozyw@sina.com">联系我们</a>
                <a href="javascript:void(0)" @click.stop="qrShow">加入我们</a>
                <div class="wechat" v-if="qr">
                    <span class="arrow"></span>
                    <img src="~assets/images/qr-wechat.png" alt="">
                    <p>关注无码科技</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      qr: false,
      routerLinkList: [
        {
          title: "热门话题",
          url: "/",
        },
        {
          title: "科技动态",
          url: "/news",
        },
        {
          title: "开发者资讯",
          url: "/tech",
        }
      ]
    };
  },
  methods: {
    qrShow() {
      this.qr = this.qr === true ? false : true;
    },
  },
  mounted() {
    var _this = this;
    document.onclick = function() {
      _this.qr = false;
    };
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #dcdcdc;
  position: relative;
  .container {
    margin: 0 auto;
    .logo {
      float: left;
      margin-right: 30px;
      margin-top: 23px;
      img {
        width: 130px;
        height: 34px;
      }
    }
    nav {
      clear: left;
      height: 80px;
      line-height: 80px;
      display: inline-block;
      a {
        text-decoration: none;
        font-size: 16px;
        margin-right: 40px;
		color: #737373;
		&.nuxt-link-exact-active.nuxt-link-active,
        &:hover {
          font-weight: 700;
          color: #246394;
		}
      }
    }
    .contact {
      height: 80px;
      float: right;
      position: relative;
      line-height: 80px;
      a {
        font-size: 14px;
        color: #999;
        margin-left: 23px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      .wechat {
        line-height: normal;
        position: absolute;
        top: 60px;
        right: -35px;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        width: 140px;
        height: 145px;
        text-align: center;
        padding-top: 18px;
        z-index: 1;
        img {
          width: 100px;
          height: 100px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        p {
          font-size: 12px;
          color: #858585;
          width: 100%;
          margin-top: 10px;
          text-align: center;
        }
        .arrow {
          width: 12px;
          height: 12px;
          transform: rotate(45deg);
          border: 1px solid #eaeaea;
          background: #fff;
          position: absolute;
          left: 65px;
          top: -7px;
          z-index: 120;
          border-bottom: none;
          border-right: none;
        }
      }
    }
  }
}
</style>
