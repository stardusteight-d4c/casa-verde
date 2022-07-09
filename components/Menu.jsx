import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <nav className="mx-[120px] mt-[18px] flex justify-between items-center">
      <div>
        <Image
          src="/assets/vector/logo.svg"
          width="177px"
          height="42px"
          alt="Logo - Casa Verde"
        />
      </div>
      <div>
        <ul className="flex gap-4 font-montserrat">
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
