import Image from "next/image";
import prod from "@/assets/productOfTheYear.webp"
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="relative">
      <Image src={prod} alt="banner image" className="w-full h-full" />
      <div className="absolute right-[200px] top-1/2 transform -translate-y-1/2 w-[600px]">
        <h1 className="font-bold text-[32px] pb-4 leading-10">TRENDSETTING WARDROBE ADDITIONS</h1>
        <p className="text-xl pb-3">Explore our newest collection and elevate your wardrobe with our premium quality garments. Limited time offer! Grab these newest collection at a discounted price</p>
        <Link href={'/shop'}>
        <button className="bg-black px-[5px] py-2 text-white rounded-md">

        Shop Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
