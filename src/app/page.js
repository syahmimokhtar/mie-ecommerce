import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";


export default function Home() {
  return (
    <>
       <Head>
        <link  rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="">
        <Slider />
      </main>

      <Footer />
  </> 
  );
}
