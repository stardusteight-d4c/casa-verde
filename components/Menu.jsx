import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FiShoppingCart } from 'react-icons/fi'
import { Fade } from 'react-reveal'

const Menu = () => {
  return (
    <Fade top>
      <nav className="mx-4 2xl:mx-[358px] md:mx-[100px] mt-[18px] flex justify-between items-center z-50">
        <div>
          <Link href="/">
            <a>
              <Image
                src="/assets/vector/logo.svg"
                width="177px"
                height="42px"
                alt="Logo - Casa Verde"
              />
            </a>
          </Link>
        </div>
        <div>
          <FiShoppingCart size={28} className="flex text-yellow md:hidden" />
          <ul className="hidden gap-4 md:flex font-montserrat">
            <li className="leading-5 duration-300 cursor-pointer hover:scale-105 text-text">
              <Link href="#como_conseguir">
                <a>Como fazer</a>
              </Link>
            </li>
            <div className="after:content-['/']" />
            <li className="leading-5 duration-300 cursor-pointer hover:scale-105 text-text">
              <Link href="#ofertas">
                <a>Ofertas</a>
              </Link>
            </li>
            <div className="after:content-['/']" />
            <li className="leading-5 duration-300 cursor-pointer hover:scale-105 text-text">
              <Link href="#depoimentos">
                <a>Depoimentos</a>
              </Link>
            </li>
            <div className="after:content-['/']" />
            <li className="leading-5 duration-300 cursor-pointer hover:scale-105 text-text">
              <Link href="#videos">
                <a>Vídeos</a>
              </Link>
            </li>
            <div className="after:content-['/']" />
            <li className="ml-5 leading-5 duration-300 cursor-pointer hover:scale-105 text-text">
              Meu carrinho
            </li>
          </ul>
        </div>
      </nav>
    </Fade>
  )
}

export default Menu
