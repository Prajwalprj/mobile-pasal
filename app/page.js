import Image from "next/image";
import Link from "next/link";

import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiOppo } from "react-icons/si";
import { SiVivo } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./globals.css";

export default function Home() {
  return (
    <div>
      {/* hero section */}

      <div className=" py-12relative w-full h-auto">
        <Image
          className="w-full h-auto"
          src="/hero section.png"
          alt="Next.js logo"
          width={0}
          height={0}
          sizes="250vw"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <div className="absolute top-0 left-0 right w-270 h-full flex-column items-top justify-start  pt-40 pl-30 ">
          <h1 className="text-white text-7xl font-bold  bg-opacity-40 p-4 rounded ">
            FIND THE BEST MOBILE
          </h1>

          <p className="text-white text-7xl mt-4  bg-opacity-30 p-3 rounded">
            Compare features and prices to get the perfect match for you.
          </p>
        </div>
      </div>

      {/* product sectiona */}

      <div className="bg-red flex justify-center pt-7 m-5  ">
        <h2 className="text-5xl  font-bold  border-b-6 border-red-800 w-fit pb-1 ">
          Choose a Product
        </h2>
        <div className="bg-red"></div>
      </div>

      <div className="flex w-auto h-100 white items-center justify-between pl-100 pr-100  flex-column  ">
        <div className="flex h-80 w-80 justify-center  items-center  bg-white rounded-xl  border-black-700 transition-all duration-300 hover:bg-red-300 hover:rounded-xl hover:shadow-lg  ">
          <Link href="/apple">
            <FaApple size={200} />
          </Link>
        </div>
        <div className="flex h-80 w-80 justify-center items-center  bg-white rounded-tr-20 hover:bg-red-300 hover:rounded-xl hover:shadow-lg">
          <Link href="/apple">
            <SiSamsung size={200} />
          </Link>
        </div>
        <div className="flex h-80 w-80 justify-center items-center  bg-white rounded-tr-20 hover:bg-red-300 hover:rounded-xl hover:shadow-lg">
          <Link href="/Oppo">
            <SiOppo size={200} />
          </Link>
        </div>
        <div className="flex h-80 w-80 justify-center items-center  bg-white rounded-tr-20 hover:bg-red-300 hover:rounded-xl hover:shadow-lg">
          <Link href="/vivo">
            <SiVivo size={200} />
          </Link>
        </div>
        <div className="flex h-80 w-80 justify-center items-center  bg-white rounded-tr-20 hover:bg-red-300 hover:rounded-xl hover:shadow-lg">
          <Link href="/Xiaomi">
            <SiXiaomi size={200} />
          </Link>
        </div>
      </div>

      {/* footer */}
      <div className=" relative flex bg-red-500 h-auto w-full pl-40 pt-10 pb-10 justify-start gap-20  ">
        <div className="flex-rows text-white-400 w-90 pb-16  ">
          <Image src="/mobilepasal logo.png" height={200} width={200} alt="footer-logo" />
          <p className="text-white">
            Mobile Pasal offer an information of mobile phones which is
            suaitable for you. Know all the infromnation of mobile from low
            range to high end mobile phones.it makes people easiler to choose
            best mobile phone for them.
          </p>
        </div>

        <div className="text-white w-90 h-90 pt-10 gap-10">
          <h1 className="font-bold">CONTACT INFO</h1>
          <br />
          <h2>EMAIL:</h2>
          <p>Prajwal8308@gmail.com</p>
          <br />

          <h2>PHONE</h2>
          <p>+977 9866589819</p>
          <br />
          <div className="flex flex-row gap-3">
            <Link href="https://www.facebook.com/prjproduction/">
              {" "}
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.facebook.com/prjproduction/">
              {" "}
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.youtube.com/@ThePRJproductionofficial">
              {" "}
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-white m-9">
          <h1 className="font-bold pb-5">BRANDS</h1>
          <Link href="/apple">apple </Link>
          <Link href="/samsung">Samsung </Link>
          <Link href="/vivo">apple </Link>
          <Link href="/mi">Xiaomi</Link>
        </div>
      </div>
    </div>
  );
}
