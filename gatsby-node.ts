import path from 'path';

import type { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import readingTime from 'reading-time';

function slugify(str: string) {
  return str.replace(/\s/g, '').toLowerCase();
}
function getPostSlug(slug: string) {
  return `/${slug.split('/').at(-1)}/`;
}

const POSTS_PER_PAGE = 5;

// Allows us to inject custom fields into our data.
export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions: { createNodeField },
}) => {
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/posts`,
      trailingSlash: false,
    });

    // Adds { field: { slug } } to the query result.
    createNodeField({
      node,
      name: 'slug',
      value: getPostSlug(slug),
    });

    // Add { field: { timeToRead } } to query result.
    createNodeField({
      node,
      name: 'timeToRead',
      value: readingTime((node as any).body),
    });
  }
};

// This maps content to automatically generate pages by whatever taxonomy we choose.
// In this case, we're creating `category`, `page`, and `post` taxonomies, mapping
// each to a specified React template.
//
// We can also use this to create our `blog` our `posts` page.
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql(`
    query Content {
      categories: allMdx {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          nodes {
            internal {
              contentFilePath
            }
          }
          totalCount
        }
      }
      pages: allMdx(
        filter: { internal: { contentFilePath: { regex: "/pages/" } } }
      ) {
        nodes {
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      posts: allMdx(
        filter: { internal: { contentFilePath: { regex: "/posts/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            fields {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
        totalCount
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }
  const { categories, pages, posts } = result.data as Queries.ContentQuery;
  const numberOfPagesBlog = Math.ceil(posts.totalCount / POSTS_PER_PAGE);

  // Paginated blog pages.
  Array.from({ length: numberOfPagesBlog }).forEach((_, idx) => {
    createPage({
      path: idx === 0 ? 'blog' : `blog/${idx + 1}`,
      component: `${path.resolve('./src/templates/blog/blog.tsx')}`,
      context: {
        limit: POSTS_PER_PAGE,
        skip: idx * POSTS_PER_PAGE,
        pageCount: numberOfPagesBlog,
        currentPage: idx + 1,
      },
    });
  });

  // Paginated category pages.
  categories.group.forEach((group) => {
    const numberOfPagesCategory = Math.ceil(group.totalCount / POSTS_PER_PAGE);

    Array.from({ length: numberOfPagesCategory }).forEach((_, idx) => {
      if (!group.fieldValue) {
        return;
      }

      createPage({
        path: `category/${slugify(group.fieldValue)}`,
        component: `${path.resolve('./src/templates/category/category.tsx')}`,
        context: {
          // This is used to make the actual GQL query
          category: group.fieldValue,
          limit: POSTS_PER_PAGE,
          skip: idx * POSTS_PER_PAGE,
          pageCount: numberOfPagesCategory,
          currentPage: idx + 1,
        },
      });
    });
  });

  pages.nodes.forEach((node) => {
    if (!node.fields?.slug) {
      return;
    }
    createPage({
      path: node.fields.slug.includes('home') ? '/' : node.fields.slug,
      component: `${path.resolve(
        './src/templates/page/page.tsx',
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  posts.edges.forEach((edge) => {
    if (!edge.node.fields?.slug) {
      return;
    }
    createPage({
      path: edge.node.fields.slug,
      component: `${path.resolve(
        './src/templates/post/post.tsx',
      )}?__contentFilePath=${edge.node.internal.contentFilePath}`,
      context: {
        next: edge.next,
        previous: edge.previous,
        slug: edge.node.fields.slug,
      },
    });
  });
};

// Hook into webpack for custom handling of things, like absolute paths in Typescript.
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  loaders,
  stage,
}) => {
  const configForTsAbsolutePaths = {
    resolve: {
      alias: {
        '@/*': path.resolve(__dirname, 'src/*'), // maps @something to path/to/something
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  };
  const configForWebComponents = {
    module: {
      rules: [
        {
          test: /@alcatraz-components\/accordion/,
          use: loaders.null(),
        },
      ],
    },
  };

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      ...configForTsAbsolutePaths,
      ...configForWebComponents,
    });
  } else {
    actions.setWebpackConfig({
      ...configForTsAbsolutePaths,
    });
  }
};
