import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";


export default function Home() {
  return (
    <>
       <Head>
        <link  rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Slider />
        <div className="mt-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h3 className="font-semibold text-5xl ">Featured Products</h3>
          <ProductList />
        </div>

        <div className="mt-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h3 className="font-semibold text-5xl mb-4 ">Categories</h3>
          <CategoryList />
        </div>

      
        <div className="mt-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h3 className="font-semibold text-5xl  mb-4 ">New Products</h3>
          <ProductList />
        </div>

      </main>

  </> 
  );
}
