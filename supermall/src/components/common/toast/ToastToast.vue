<template>
<!-- v-show控制显示隐藏 -->
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name: 'ToastToast',
  props: {
    /* 控制显示的内容 */
    message: {
      type: String,
      default: ''
    },
    /* 给v-show设置变量，默认为false */
    isShow: {
      type: Boolean,
      default: false,
  }
 },
}
</script>
<style scoped>
.toast {
  /**在谷歌浏览器中element.style内联样式设置为display:none，可用提升权限的方式修改
     display: block !important;这样上面的display:none禁用，就会优先显示display: block*/ 
    display: inherit !important;
    position: fixed;
    color: #fff;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.75);
    z-index: 999;
}
</style>