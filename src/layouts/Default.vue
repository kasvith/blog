<template>
  <div id="app">
    <header>
      <div class="header-bar" />
      <div class="header-inner container flex">
        <Logo v-if="showLogo" />

        <nav class="header-actions flex flex--align-right">
          <ToggleTheme />
        </nav>
      </div>
    </header>

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
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
// .header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   min-height: var(--header-height);
//   padding: 0 calc(var(--space) / 2);
//   top:0;
//   z-index: 10;

//   &__left,
//   &__right {
//     display: flex;
//     align-items: center;
//   }

//   @media screen and (min-width: 1300px) {
//     //Make header sticky for large screens
//     position: sticky;
//     width: 100%;
//   }
// }

header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  // transition: background-color 0.3s, border-color, 0.3s;
  .header {
    &-bar {
      background: linear-gradient(
        90deg,
        var(--primary-color) 0%,
        #8ed6fb 50%,
        #d32e9d 100%
      );
      padding: 2px;
      text-align: center;
      color: #fff;
      font-size: 1rem;
      a {
        color: currentColor;
      }
    }

    &-inner {
      padding: 0 var(--space);
      min-height: var(--header-height);
    }

    &-actions {
      .right {
        margin-left: auto;
        align-items: flex-end;
      }
    }
  }

  @media screen and (min-width: 992px) and (max-resolution: 1) {
    backdrop-filter: blur(4px);
  }

  @media screen and (min-width: 992px) and (-webkit-max-device-pixel-ratio: 1) {
    backdrop-filter: blur(4px);
  }
}

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
