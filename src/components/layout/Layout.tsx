import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import NewTask from "../NewTask/NewTask";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <NewTask />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
