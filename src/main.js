import VueDisqus from "vue-disqus";

import config from "../gridsome.config";

// Import main css
import "~/assets/style/index.scss";
import "~/assets/fonts/style.css";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueDisqus, { shortname: "kasvith-github-io" });

  const copyRightNotice = `\u00a9 ${
    config.author
  }, ${new Date().getFullYear()}. All rights reserved`;

  // global meta
  head.meta.push(
    {
      key: "og:title",
      name: "og:title",
      content: "kasvith.me",
    },
    {
      key: "keywords",
      name: "keywords",
      content: config.keywords,
    },
    {
      name: "author",
      content: config.author,
    },
    { name: "copyright", content: copyRightNotice },
    {
      key: "og:site_name",
      property: "og:site_name",
      content: config.siteName,
    },
    {
      key: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      key: "og:description",
      property: "og:description",
      content: config.siteDescription,
    },
    {
      key: "twitter:description",
      name: "twitter:description",
      content: config.siteDescription,
    },
    {
      key: "og:image",
      property: "og:image",
      content: "https://kasvith.me/img/featured.jpg",
    },
    {
      key: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "twitter:image",
      name: "twitter:image",
      content: "https://kasvith.me/img/featured.jpg",
    },
    {
      key: "twitter:creator",
      name: "twitter:creator",
      content: "@kasvith",
    },
    {
      key: "twitter:site",
      name: "twitter:site",
      content: "@kasvith",
    }
  );
}
