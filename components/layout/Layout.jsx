import MainNav from "./MainNav";
import PropTypes from "prop-types";
import Footer from "./Footer";

/**
 * Creates the layout of the document
 */

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <MainNav />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
