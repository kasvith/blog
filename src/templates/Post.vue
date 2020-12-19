<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
        />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="content-box-no-bg">
      <Disqus :identifier="$page.post.title" />
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  computed: {
    cover() {
      return this.$page.post.cover_image ? `${this.$static.metadata.siteUrl}${this.$page.post.cover_image.src}` : "https://kasvith.me/img/featured.jpg"
    },
    postUrl() {
      let siteUrl = this.$static.metadata.siteUrl;
      let postPath = this.$page.post.path;

      return `${siteUrl}${postPath}`;
    },
    keywords() {
      let keywords = ''
      for (let i in this.$page.post.keywords) {
        keywords = keywords.concat(`${this.$page.post.keywords[i]},`)
      }
      return keywords.replace(/(^\s*,)|(,\s*$)/g, '')
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'og:title',
          name: 'og:title',
          content: this.$page.post.title,
        },
        {
          key: 'og:type',
          name: 'og:type',
          content: 'article',
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.post.description,
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.postUrl
        },
        {
          key: "article:published_time",
          property: "article:published_time",
          content: this.$page.post.date
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: this.cover,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.post.title,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.post.description,
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: this.cover,
        },
        { key: 'keywords', name: 'keywords', content: this.keywords },
      ]
    }
  }
}
</script>

<static-query>
    query {
        metadata {
            siteUrl
        }
    }
</static-query>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    headings {
      value
      anchor
    }
    description
    content
    keywords
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
</style>
