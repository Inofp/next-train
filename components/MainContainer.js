import Head from "next/head";
import React from "react";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"arima" + keywords} ></meta>
        <title>Главная страница</title>
      </Head>

      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Users" />
      </div>

          <div>{children}</div>
          
          
      <style jsx>
        {`
          .navbar {
            background: red;
            padding: 15;
          }
        `}
      </style>  
    </>
  );
};

export default MainContainer;
