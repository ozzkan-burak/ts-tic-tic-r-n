import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AllOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from "react-icons/io";

import Logo from "../assets/img/indir.png";





const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px] md:h-[62px] h-[38px]">
          <Image
            className='cursor-pointer'
            src={Logo} 
            alt="TikTik"
            layout="responsive"
            />
        </div>  
      </Link>
    </div>
  )
}

export default Navbar;
