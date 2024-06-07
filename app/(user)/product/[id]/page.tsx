"use client";

import Container from "@/components/Container";
import Onsale from "@/components/Onsale";
import ProductInfo from "@/components/ProductInfo";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { allProducts } from "@/constants";
import { useEffect, useState } from "react";
import { ProductIdProps } from "@/type";

const SinglePage = ({ params }: { params: { id: number } }) => {
  const [productDetails, setProductDetails] = useState<any>(null);
  console.log(productDetails);
  

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct: ProductIdProps = allProducts.find((p) => p._id === params.id);
    console.log(foundProduct);
    
    // if (foundProduct) {
    //   setProductDetails(foundProduct);
    // } else {
    //   console.log("Product not found");
    // }
  }, [params.id]);

  return (
    <div>
      //{" "}
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
          <div>{/* <Onsale products={specialOffersProduct} /> */}</div>

          <div className="h-full xl:col-span-2">
            <Image
              src={''}
              alt="product image"
              className="w-full h-full object-contain"
              width={500}
              height={500}
            />
          </div>

          <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            {/* <ProductInfo product={product} /> */}
            {/* {productDetails.title} */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePage;
