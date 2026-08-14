import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

const HeaderLayout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense> 
    </>
  );
};

export default HeaderLayout;