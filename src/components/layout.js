import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children, isFullScreen }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  // If it's a 'full screen' page, don't show the header and footer.
  if (isFullScreen) {
    return (
      <div className="body-full-screen-wrapper" data-is-root-path={isRootPath}>
        {children}
      </div>
    );
  }

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
