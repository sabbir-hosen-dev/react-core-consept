import { Outlet } from "react-router";
import Footer from "./Footer";
import Navber from "./Navber";

function Home() {
  return (
    <>
      <Navber />
      <div className="min-h-[70vh] px-5 py-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Home;
