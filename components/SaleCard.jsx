import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const SaleCard = ({ img, title, price }) => {
  return (
    <div className="w-[380px] h-[200px] bg-white grid grid-cols-2 shadow-custom-shadow overflow-hidden">
      <div className="col-span-1">
        <Image
          src={img}
          alt="/"
          width="255px"
          height="337px"
          layout="intrinsic"
          className="object-cover"
        />
      </div>

      <div className="col-span-1 py-[27px]">
        <h3 className="font-black text-[32px] leading-[37px] pb-2 text-text inline-block">
          {title}
        </h3>
        <span className="inline-block pb-6 font-montserrat text-text/50">
          R$ {price}
        </span>
        <button className="flex items-center gap-[26px] text-yellow font-montserrat">
          <span>Comprar</span> <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default SaleCard
