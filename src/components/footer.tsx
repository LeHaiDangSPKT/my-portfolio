// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-px w-1/2  bg-linear-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex md:flex-row items-center justify-center">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="#" className="text-[#16f2b3]">Le Hai Dang</Link>
          </p>
        </div>
      </div>
    </div >
  );
};

export default Footer;