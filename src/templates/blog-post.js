import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import AppHead from "../components/app-head";

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Security Mountain`;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Link to="/">
          <i class="bi bi-arrow-left"></i>
        </Link>
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.frontmatter.description }}
          itemProp="articleBody"
        />
        <hr />
        <p>Last changed: {post.frontmatter.date}</p>
        <footer></footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
        </ul>
      </nav>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <AppHead
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        position
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
