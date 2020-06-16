<template>
  <div class="toast" v-show='isshow'>{{message}}</div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isshow: false
      }
    },
    methods: {
      show(message, duration) {
        this.message = message
        this.isshow = true
        setTimeout(() => {
          this.isshow = false
          this.message = ''
        }, duration)
      }
    }
  }

</script>
<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 8px 10px;
    z-index: 999;
    transform: translate(-50%, -50%);
  }
</style>