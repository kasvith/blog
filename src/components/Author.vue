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
      Opensource &#x1F9E1; <br />
      Always learning something new &#x1F317;
    </p>

    <p class="author__links">
      <a :href="link.to" target="_blank" v-for="link in links" :key="link.to">
        <span class="icon" :class="link.icon" />
      </a>
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
export default {
  props: ['showTitle'],
  data() {
    return {
      links: [
        {
          to: '//fb.com/kasvith',
          icon: 'icon-facebook'
        },
        {
          to: '//twitter.com/kasvith',
          icon: 'icon-twitter'
        },
        {
          to: '//github.com/kasvith',
          icon: 'icon-github'
        },
        {
          to: '//gitlab.com/kasvith',
          icon: 'icon-gitlab'
        },
        {
          to: 'mailto:alankasun@gmail.com',
          icon: 'icon-send'
        },
        {
          to: '/feed.xml',
          icon: 'icon-rss'
        }
      ]
    }
  }
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
      text-decoration: none;
    }
  }
}
</style>
