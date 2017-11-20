<template>
    <div class="backTop" @click.stop="backTop">
        <div class="line"></div>
        <div class="arrow"></div>
    </div>
</template>

<script>
export default {
	methods: {
		backTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	},
}
</script>

<style lang="scss" scoped>
/* 回到顶部 */
.backTop {
  border: 1px solid #d4d6d8;
  position: relative;
  border-radius: 4px;
  background: #fff;
  z-index: 999;
  position: fixed;
  right: 55px;
  bottom: 69px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    transition: all .3s ease-in-out;
    background: #999;
  }
  .line {
    width: 12px;
    height: 2px;
    background: #dddfe1;
    margin-bottom: 2px;
  }
  .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7px 10px;
    border-color: transparent transparent #dddfe1;
  }
}
</style>
