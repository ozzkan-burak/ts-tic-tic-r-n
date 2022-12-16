import React, {useState} from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from "next/link";
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi'


const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3"
        onClick={()=> setShowSidebar(!showSidebar)}
        >
          {showSidebar ? <GiCancel /> : <AiOutlineMenu />}
      </div>
    </div>
  )
}

export default Sidebar
