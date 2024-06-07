'use client';

import React from "react";
import Container from "./Container";
import { ProductProps } from "@/type";
import Product from "./Product";
import Slider from "react-slick";

import { bestSellers } from "@/constants";
import NextArr from "./NextArr";
import PrevArr from "./PrevArr";

// interface Props {
//     products: ProductProps[];
//     title?: string;
//   }

const BestSeller = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArr />,
    prevArrow: <PrevArr />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Container className="w-full pb-20 px-4">
      <Slider {...settings}>
        {bestSellers.map((item) => (
          <Product key={item._id} product={item} className={'px-2'} />
        ))}
      </Slider>
    </Container>
  );
};

export default BestSeller;
