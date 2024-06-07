import React from "react";
import Banner from "@/components/Banner";
import HomeBanner from "@/components/HomeBanner";
import YearProduct from "@/components/YearProduct";
import NewArrival from "@/components/NewArrival";

// import Jewels from "@/assets/Assesories.jpeg";
import Men from "@/assets/men.webp";
import Women from "@/assets/WOMEN.webp";
import Fabrics from "@/assets/fabrics.webp";
import Unisex from "@/assets/unisex.webp";
import BestSeller from "@/components/BestSeller";
import Footer from "@/components/Footer";

const Homepage = async () => {
  const banners = [
    // {
    //   _id: 56,
    //   img: Jewels,
    //   text: "Jewels",
    // },
    {
      _id: 89,
      img: Men,
      text: "Men",
    },
    {
      _id: 85,
      img: Women,
      text: "Women",
    },
    {
      _id: 83,
      img: Fabrics,
      text: "Fabrics",
    },
    {
      _id: 77,
      img: Unisex,
      text: "Unisex",
    },
  ];
  // const newArrivalProducts = ''
  // const bestSellersProducts =""
  return (
    <main className="text-sm min-h-screen">
      <Banner banners={banners} />
      <NewArrival />
      <HomeBanner />
      <BestSeller />
      {/* <YearProduct /> */}
      {/* <BestSeller  /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Homepage;
