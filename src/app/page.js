import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";


export default function Home() {
  return (
    <>
       <Head>
        <link  rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="">
        <Slider />
        <h3 className="mx-12 p-12 font-semibold text-5xl md:text-left text-center">Featured Products</h3>
        <ProductList />
      </main>

      <Footer />
  </> 
  );
}
