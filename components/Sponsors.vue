<template>
    <div class="side">
        <div class="adsContainer">
            <h2 class="header">Sponsors</h2>
            <div class="nc_clearfix">
                <template v-for="(item,index) in data">
                    <a class="web adContainer" :class="{ even: index % 2 !== 0 }" :href="item.url" :key="index">
                        <img :src="item.image" alt="item.title" :title="item.title">
                    </a>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"]
}
</script>

<style lang="scss" scoped>
.side {
  margin-left: 50px;
  max-width: 256px;
  .adsContainer {
    .header {
      font-size: 16px;
      color: #afafaf;
      line-height: 1.78em;
      margin-bottom: 10px;
    }
    .web {
      width: 121px;
      height: 75px;
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      &:hover {
        box-shadow: 0 4px 18px -4px rgba(0, 0, 0, 0.1);
        transform: perspective(500px) scaleZ(0.1) translateZ(100px);
      }
      img {
        width: 121px;
        height: 75px;
      }
    }
    .even {
      margin-right: 0px;
    }
    .adContainer {
      border: 1px solid #e5e5e5;
      position: relative;
      border-radius: 0;
    }
  }
}
</style>
