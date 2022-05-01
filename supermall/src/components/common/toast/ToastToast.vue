<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name: 'ToastToast',
  props: {
      /* message: {
          type: String,
          default: ''
      },
      show: {
          type: Boolean,
          default: false,
      } */
  },
  methods:{
    show(message, duration) { /* duration为时间 */
      this.show = true
      this.message = message
      setTimeout(() => {
          this.show = false
          this.message = ''
      }, duration)
    }
  },
  data () {
   return {
       message: '',
       isShow: false
   }
  },
}
</script>
<style scoped>
.toast {
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