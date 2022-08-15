import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import AppHead from "../components/app-head";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Security Mountain`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/individual" (or
          the directory you specified for the "gatsby-source-filesystem" plugin
          in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <h1 style={{ paddingTop: '10rem', paddingLeft: '10rem', paddingRight: '10rem' }}>Businesses</h1>
      <ol style={{ listStyle: `none`, paddingTop: '5rem', paddingLeft: '10rem', paddingBottom: '10rem', paddingRight: '10rem' }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                </header>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <AppHead title="Businesses" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fields: {category: {eq: "business"}}}, sort: { fields: [frontmatter___position], order: ASC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          position
        }
      }
    }
  }
`;
