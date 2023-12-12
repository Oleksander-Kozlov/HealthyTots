import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      {/* <div style={{height: "90px", backgroundColor: "black"}}></div>
      <Header style={{ position: "sticky", top: "0", zIndex: "100", backgroundColor: "white" }}/> */}
      <Header/>
         <Suspense
            //   fallback={<Loader />}
          >
              <Outlet />
              
          </Suspense>
          <Footer/>
    </>
  );
};

export default SharedLayout;


