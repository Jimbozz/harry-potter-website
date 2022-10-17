import Footer from "./Footer";
import MainNav from "./MainNav";

function Layout(props) {
  return (
    <>
      <MainNav />
      <main className="main wrapper">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
