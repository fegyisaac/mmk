import Link from "next/link";
import logo from "@/assets/logoLight.png";
import { IoReturnDownBack } from "react-icons/io5";
import Image from "next/image";

const StudioNavbar = (props: any) => {
  return (
    <div className="w-full">
      <div className="p-5 bg-red-500 text-gray-100 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to website
        </Link>

        <Image src={logo} alt="logo" className="w-24" />
        <p className="text-sm">Admin Studio for OREBI Online Shopping</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
