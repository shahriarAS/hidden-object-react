import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ childComp }) {
  return (
    <div className="max-w-[1440px] w-full flex flex-col items-center justify-between m-auto min-h-screen h-full">
      <Navbar />
      {childComp}
      <Footer />
    </div>
  );
}

export default Layout;
