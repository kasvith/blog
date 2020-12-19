<template>
  <button
    @click="scrollTop"
    v-show="visible"
    class="scroll-to-top bottom-right"
  >
    <span class="icon-chevrons-up"></span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style scoped lang="scss">
.scroll-to-top {
  background-color: var(--primary-color-dark);
  color: white;
  padding: 0.15em;
  border-radius: var(--radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  opacity: 0.5;
  transition: opacity 0.6s;
  font-size: 1.5em;

  &:hover {
    opacity: 1;
  }
}

.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>