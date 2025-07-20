import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full px-6 md:px-20 py-10 border-t border-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo + Description */}
        <div>
          <Image
            src="/mobilepasal logo.png"
            height={100}
            width={100}
            alt="footer-logo"
            className="mb-4"
          />
          <p className="text-gray-600 text-sm">
            Mobile Pasal offers all the info you need about phones — from budget to high-end. Make it easy to choose your best match!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-black mb-3">CONTACT INFO</h2>
          <p className="text-gray-600 text-sm">
            <strong>Email:</strong> prajwal8308@gmail.com
          </p>
          <p className="text-gray-600 text-sm mt-1">
            <strong>Phone:</strong> +977 9866589819
          </p>
          <div className="flex gap-3 text-black mt-4">
            <Link href="https://www.facebook.com/prjproduction/" target="_blank">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.youtube.com/@ThePRJproductionofficial" target="_blank">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h2 className="font-bold text-black mb-3">BRANDS</h2>
          <ul className="text-gray-600 text-sm space-y-1">
            <li><Link href="/Mobile/apple">Apple</Link></li>
            <li><Link href="/Mobile/vivo">Vivo</Link></li>
            <li><Link href="/Mobile/oppo">Oppo</Link></li>
            <li><Link href="/Mobile/mi">Xiaomi</Link></li>
            <li><Link href="/Mobile/samsung">Samsung</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-bold text-black mb-3">SUPPORT</h2>
          <ul className="text-gray-600 text-sm space-y-1">
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Report</Link></li>
          </ul>
        </div>

        {/* Stay in Touch */}
        <div>
          <h2 className="font-bold text-black mb-3">STAY IN TOUCH</h2>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 mb-3 rounded-2xl border outline-none text-sm"
          />
          <button className="w-full bg-black text-white py-2 rounded-3xl text-sm hover:bg-gray-800 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} MobilePasal.com — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
