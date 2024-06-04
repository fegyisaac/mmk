import Banner from "@/components/Banner";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/sanityClient";

const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

// const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrivals']{
// ...
// } | order(_createdAt asc)`;

// const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
//   ...
//  } | order(_createdAt asc)`;
// const specialOffersQuery = groq`*[_type == 'product' && position == 'Special Offers']{
//   ...
//  } | order(_createdAt asc)`;

const Homepage = async () => {
  const banners = await client.fetch(bannerQuery);

  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
    </main>
  );
};

export default Homepage;
