<template>
  <div id="app">
    <app-header :show-logo="showLogo" />

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright"
        >Copyright © {{ new Date().getFullYear() }}.
      </span>
      <span class="footer__links"
        >Powered by <a href="//gridsome.org"> Gridsome </a></span
      >
    </footer>

    <scroll-to-top />
  </div>
</template>

<script>
import ScrollToTop from '~/components/ScrollToTop.vue'
import AppHeader from './partials/Header'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    ScrollToTop,
    AppHeader
  }
}
</script>

<style lang="scss">
.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
