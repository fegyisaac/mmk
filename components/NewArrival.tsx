"use client";

import Slider from "react-slick";
import Container from "./Container";
import Product from "./Product";
import { ProductProps } from "@/type";
import NextArr from "./NextArr";
import PrevArr from "./PrevArr";
import { availableProduct } from "../constants";

// interface Props {
//   products: ProductProps[];
// }

const NewArrival = () => {
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

  const ArrivalProduct = availableProduct.slice(1, 7);

  return (
    // <Container className="absolute top-[400px] left-1/2 transform -translate-x-1/2">

    <Container  className="-mt-[120px]">
      <Slider {...settings}>
        {ArrivalProduct?.map((item: any) => (
          <div key={item?._id} className="px-3 bg-blue-500 py-2 ">
            <Product product={item} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default NewArrival;
