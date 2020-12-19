// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "kasvith.me",
  siteUrl: "https://kasvith.me",
  siteDescription:
    "A personal blog space where I write about stuffs I know and like",

  templates: {
    Post: "/posts/:title",
    Tag: "/tags/:id",
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/posts/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-feed",
      options: {
        // Required: array of `GraphQL` type names you wish to include
        contentTypes: ["Post"],
        // Optional: any properties you wish to set for `Feed()` constructor
        // See https://www.npmjs.com/package/feed#example for available properties
        feedOptions: {
          title: "kasvith.me - feed",
          description:
            "A personal blog space where I write about stuffs I know and like",
        },
        // === All options after this point show their default values ===
        // Optional; opt into which feeds you wish to generate, and set their output path
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        atom: {
          enabled: true,
          output: "/feed.atom",
        },
        json: {
          enabled: true,
          output: "/feed.json",
        },
        // Optional: the maximum number of items to include in your feed
        maxItems: 25,
        // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
        // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
        // To disable this functionality, set to `null`.
        htmlFields: ["description", "content"],
        // Optional: if you wish to enforce trailing slashes for site URLs
        enforceTrailingSlashes: false,
        // Optional: a method that accepts a node and returns true (include) or false (exclude)
        // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
        filterNodes: (node) => true,
        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content,
          description: node.description,
        }),
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      slug: true,
      autolinkHeadings: {
        content: {
          type: "text",
          wrap: true
        },
      },
      plugins: [
        "gridsome-plugin-remark-prismjs-all",
        "remark-emoji",
        "gridsome-remark-figure-caption",
        "remark-toc",
      ],
    },
  },
};
