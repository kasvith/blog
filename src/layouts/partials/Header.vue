<template>
  <header class="header">
    <div class="header-bar" />
    <div class="header-inner container flex">
      <Logo v-if="showLogo" />

      <nav class="header-actions flex flex--align-right">
        <div class="links">
          <a href="/posts/">
            <span>Posts</span>
          </a>
          <a href="/tags/">
            <span>Tags</span>
          </a>
        </div>
        <ToggleTheme />
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
export default {
  components: {
    Logo,
    ToggleTheme
  },
  props: {
    showLogo: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
</style>