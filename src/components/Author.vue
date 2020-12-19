<template>
  <div class="author">
    <g-image
      alt="My Avatar"
      class="author__image"
      src="~/assets/images/me.jpg"
      width="180"
      height="180"
      blur="5"
    />

    <h1 v-if="showTitle" class="author__site-title">Kasun Vithanage</h1>

    <p class="author__intro">
      Opensource &#x1F499; <br />
      Always learning something new &#x1F317;
    </p>

    <p class="author__links">
      <a href="//fb.com/kasvith" target="__blank"><facebook /></a>
      <a href="//twitter.com/kasvith" target="__blank"><twitter /></a>
      <a href="//github.com/kasvith" target="__blank"><github /></a>
      <a href="//gitlab.com/kasvith" target="__blank"><gitlab /></a>
      <a href="mailto:alankasun@gmail.com" target="__blank"><email /></a>
      <a href=""><rss /></a>
    </p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Twitter from '~/assets/images/social/twitter.svg'
import Github from '~/assets/images/social/github.svg'
import Gitlab from '~/assets/images/social/gitlab.svg'
import Facebook from '~/assets/images/social/facebook.svg'
import Email from '~/assets/images/social/send.svg'
import Rss from '~/assets/images/social/rss.svg'

export default {
  components: {
    Twitter,
    Github,
    Gitlab,
    Facebook,
    Email,
    Rss
  },
  props: ['showTitle']
}
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>
