<template>
  <a class="logo" href="/">
    <span class="logo__text"> {{ $static.metadata.siteName }} </span>
  </a>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
</style>
