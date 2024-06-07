"use client";

import { ProductProps } from "@/type";
import Link from "next/link";
import Image from "next/image";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "@/Redux/Slices/orebiSlice";

interface Props {
  product: ProductProps;
  bg?: string;
}

const Product = ({ product, bg }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="border-black border group hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group">
      <div className="bg-white overflow-hidden">
        <div className={`relative ${bg}`}>
          <Link href={`/`}>
            <Image
              src={product.img}
              alt="product image"
              width={700}
              height={700}
              className=""
            />
          </Link>

          {/*  */}
          <div className="absolute bottom-0 flex items-center gap-3 justify-center w-full translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(
                  `${product?.title.substring(0, 12)}... added to cart`
                );
              }}
              className="bg-gray-800 text-gray-200 px-[5px] py-1 text-[10px] rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
            >
              <span>
                <AiOutlineShopping />
              </span>
              Add to bag
            </button>
            <Link
              href={`/product/${product._id}`}
              className="bg-gray-800 text-gray-200 px-[5px] py-1 text-[10px] rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
            >
              <span>
                <BsArrowsFullscreen />
              </span>
              Quick view
            </Link>
          </div>
          <div
            className={`${product?.new ? "absolute top-2 right-2" : "hidden"}`}
          >
            <p className="bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md">
              {product?.new && "New"}
            </p>
          </div>


          <div
            className={`${product?.ispopular ? "absolute top-2 right-2 z-50" : "hidden"}`}
          >
            <p className="bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md">
              {product?.ispopular && "Popular"}
            </p>
          </div>
        </div>
      </div>

      <div className="py-2 flex flex-col gap-1 px-2">
        <div className="">
          <h2 className="text-[16px] text-primeColor font-semibold pb-2">
            {product?.title.substring(0, 30)}
          </h2>
          <div className="flex items-center justify-between gap-2">
            <p className="text-[#767676] text-xs italic line-through">
              ${product?.prevPrice}
            </p>
            <p className="text-sm font-semibold">${product?.price}</p>
          </div>
        </div>
        <div className="">
          {/* <p className="text-[#767676] text-sm">
            a product by{" "}
            <span className="font-semibold text-primeColor">
              {product?.brand}
            </span>
          </p> */}
          <div className="flex items-center justify-between gap-1 w-fit">
            <span className="text-sm text-red-500">{product?.rating}</span>
            <MdOutlineStarPurple500 className="text-yellow-500" />
          </div>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Product;
