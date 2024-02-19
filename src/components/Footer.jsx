import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1A1622] lg:h-[362px] text-white py-8 h-auto">
        <div className="flex md:flex-row justify-around flex-col gap-12 md:mx-20 p-8 lg:mx-10 xl:mx-20">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <img src="/logo.png" alt="logo" className="w-[80%] -ml-3" />
            <p>
              Join our Discord channel or <br />
              follow us on Twitter to keep up to <br /> date with <br />
              our latest work and <br /> announcements.
            </p>
            <div className="flex gap-4">
              <span>
                <FaFacebookF className="text-blue-500" />
              </span>
              <span>
                <FaTwitter className="text-blue-300" />
              </span>
              <span>
                <FaLinkedinIn className="text-blue-400" />
              </span>
              <span>
                <FaYoutube className="text-red-600" />
              </span>
              <span>
                <SiInstagram className="text-pink-700" />
              </span>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Quick Links</h1>
              <ul className="mx-6 space-y-2">
                <li className="list-disc">Privacy</li>
                <li className="list-disc whitespace-nowrap">Terms & Refund</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Company</h1>
              <ul className="mx-6 space-y-2">
                <li className="list-disc">Advertiser</li>
                <li className="list-disc">Publisher</li>
                <li className="list-disc">Influencer</li>
                <li className="list-disc">Loyalty Program</li>
                <li className="list-disc">Referrals</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl font-bold">Contacts us</h1>
            <span className="flex items-center gap-2">
              <MdLocalPhone size={20} />
              (+91)7381621836
            </span>
            <span className="flex items-center gap-2">
              <MdEmail size={20} />
              Partners@viztratech.com
            </span>
            <span className="flex gap-2">
              <IoLocation size={20} className="mt-1" />
              734/735, Ijmima <br /> complex Mindspace, Malad West, <br />
              Mumbai, Maharashtra 400064
            </span>
          </div>
        </div>
        <div className="text-center bg-[#1A1622] text-[15px] border-t-2 pb-8 text-[#B7B4BB] border-gray-800 mt-6 pt-7">
        Copyright © 2024 LeadTym All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
