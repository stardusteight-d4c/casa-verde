import Image from 'next/image'
import React from 'react'

import { FiPlay } from 'react-icons/fi'

const VideoCard = ({ img, title, date }) => {
  return (
    <div className="duration-300 cursor-pointer hover:scale-105">
      <div className="min-w-[278px] h-[252px] relative shadow-custom-shadow">
        <Image
          src={img}
          alt="/"
          width="278px"
          height="252px"
          className="brightness-75"
        />
        <FiPlay
          size={24}
          className="absolute w-[78px] h-[78px] pl-6 p-4 top-1/3 left-[35%] bg-white rounded-full text-yellow"
        />
      </div>
      <div className="pt-2 font-montserrat">
        <h3 className="text-text text-[22px]">{title}</h3>
        <span className="text-text/50">{date}</span>
      </div>
    </div>
  )
}

export default VideoCard
