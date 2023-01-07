import Link from 'next/link'
import React from 'react'

const Discover = () => {
  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:bloxk">
        Popular Topics
      </p>
      <div className="flex gap-3 flex-wrap">
        {
          topics.map((topic)=>(
            <Link href={`/?topic=${topic.name}`}></Link>
          ))
        }
      </div>
    </div>
  )
}

export default Discover
