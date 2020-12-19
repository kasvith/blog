import VueDisqus from "vue-disqus";

// Import main css
import "~/assets/style/index.scss";
import "~/assets/fonts/style.css";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueDisqus, { shortname: "kasvith-github-io" });

  // global meta
  head.meta.push(
    ...[
      {
        key: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        key: "og:site_name",
        name: "og:site_name",
        content: "kasvith.me",
      },
      {
        key: "og:description",
        name: "og:description",
        content: `kasvith.me - A personal blog space where I write about stuffs I know and like`,
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: `kasvith.me - A personal blog space where I write about stuffs I know and like`,
      },
      {
        key: "twitter:card",
        name: "twitter:card",
        content: 'summary_large_image',
      },
      {
        key: "twitter:creator",
        name: "twitter:creator",
        content: '@kasvith',
      },
      {
        key: "twitter:site",
        name: "twitter:site",
        content: '@kasvith',
      }
    ]
  );

  // set og url
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: "og:url",
      name: "og:url",
      content: "https://kasvith.me" + to.path,
    });
    next();
  });
}
