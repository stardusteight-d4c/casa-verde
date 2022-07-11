import Image from 'next/image'
import React from 'react'

import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="relative w-screen h-full md:h-[320px] bg-white mt-[100px] font-montserrat">
      <div className="hidden md:block absolute bottom-0 bg-[url('/assets/vector/paintFooter.svg')] w-[585px] h-[110px] bg-no-repeat" />
      <div className="block md:hidden absolute right-0 -top-40 bg-[url('/assets/vector/paintFooterMobile.svg')] w-[103px] h-[636px] bg-no-repeat bg-contain" />
      <div className="md:pl-[100px] 2xl:pl-0 pb-[65px] mr-[103px] 2xl:mx-[358px] md:pb-0 pl-4  md:pr-[380px] pt-[30px] md:pt-[56px] grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-[32px] md:gap-[70px]">
        <div className="col-span-1 row-span-1">
          <div>
            <Image
              src="/assets/vector/logo.svg"
              width="177px"
              height="42px"
              alt="Logo - Casa Verde"
              layout="fixed"
            />
          </div>
          <ul className="flex items-center gap-6 mt-5 text-yellow">
            <li>
              <BsFacebook size={24} />
            </li>
            <li>
              <BsTwitter size={24} />
            </li>
            <li>
              <BsInstagram size={24} />
            </li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1 text-text/50">
          <h5 className="text-[22px] text-text mb-2">Rio de Janeiro</h5>
          <span>
            Rua Siqueira Campos, 171, 303 Copacabana <br />
          </span>
          <span>Telefone: (21) 99876-0099</span>
        </div>
        <div className="col-span-1 row-span-1 text-text/50">
          <h5 className="text-[22px] text-text mb-2">São Paulo</h5>
          <span>
            Rua Anita Garibaldi, 33, 13 Sé <br />
          </span>
          <span>Telefone: (11) 99875-2201</span>
        </div>
        <div className="hidden md:block absolute w-[331px] h-[373px] 2xl:right-[358px] bottom-0 right-12 bg-no-repeat bg-contain bg-[url('/assets/vector/ilustra.svg')]" />
      </div>
    </footer>
  )
}

export default Footer
