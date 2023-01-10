import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/router";

import { topics } from '../utils/constants';

const Discover = () => {

  const activeTopicStyle = "";

  const topicStyle = "xl:border-2 hover:bg-primary vl: border-gray-300 px-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black"

  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:bloxk">
        Popular Topics
      </p>
      <div className="flex gap-3 flex-wrap">
        {
          topics.map((topic) => (
            <Link key={topic.name} href={`/?topic=${topic.name}`}>
              <div className={topicStyle}>
                <span className="font-bold text-2x xl:text-md">
                  {topic.icon}
                </span>
                <span className="font-medium text-md hidden xl:block capitalize">
                  {topic.name}
                </span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Discover
