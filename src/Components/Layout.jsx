import Footer from "./Footer";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;