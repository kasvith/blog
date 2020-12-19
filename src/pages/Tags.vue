<template>
  <layout>
    <div class="content-box">
      <h1 class="text-center">{{ $page.tags.totalCount }} Tags in total</h1>

      <div class="tags">
        <g-link
          v-for="tag in $page.tags.edges"
          :key="tag.node.id"
          :to="tag.node.path"
          class="tag"
        >
          <span>#</span> {{ tag.node.title }}
        </g-link>
      </div>
    </div>
  </layout>
</template>

<page-query>
query Tags {
  tags: allTag{
    totalCount
    edges{
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostTags
  },
  metaInfo: {
    title: 'Tags'
  },
}
</script>

<style lang="scss">
</style>