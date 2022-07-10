import Image from 'next/image'
import React from 'react'

import { FiShoppingCart } from 'react-icons/fi'

const Menu = () => {
  return (
    <nav className="mx-4 2xl:mx-[358px] md:mx-[120px] mt-[18px] flex justify-between items-center">
      <div>
        <Image
          src="/assets/vector/logo.svg"
          width="177px"
          height="42px"
          alt="Logo - Casa Verde"
        />
      </div>
      <div>
        <FiShoppingCart size={28} className="flex text-yellow md:hidden" />
        <ul className="hidden gap-4 md:flex font-montserrat">
          <li className="leading-5 duration-300 cursor-pointer fo hover:scale-105 text-text">
            Como fazer
          </li>
          <div className="after:content-['/']" />
          <li className="leading-5 duration-300 cursor-pointer fo hover:scale-105 text-text">
            Ofertas
          </li>
          <div className="after:content-['/']" />
          <li className="leading-5 duration-300 cursor-pointer fo hover:scale-105 text-text">
            Depoimentos
          </li>
          <div className="after:content-['/']" />
          <li className="leading-5 duration-300 cursor-pointer fo hover:scale-105 text-text">
            Vídeos
          </li>
          <div className="after:content-['/']" />
          <li className="ml-5 leading-5 duration-300 cursor-pointer fo hover:scale-105 text-text">
            Meu carrinho
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
