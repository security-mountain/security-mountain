import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import AppHead from "../components/app-head";

import logo from "../assets/wordmark.png";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle} isFullScreen={true}>
      <div className="welcomeWrapper">
        <div className="modalWelcome">
          <img src={logo} className="logoheader" />
          <div class="modalFooter">
            <p className="qtext">
              Are you an individual or part of a business?
            </p>
            <div className="options">
              <Link to={"/individual/"} itemProp="url" className="btnTile btnPersonal">
                <i className="fa-solid fa-user" />
                <p>Individual</p>
              </Link>
              <Link to={"/business/"} itemProp="url" className="btnTile btnBusiness">
                <i className="fa-solid fa-computer" />
                <p>Business</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <AppHead title="Welcome" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`