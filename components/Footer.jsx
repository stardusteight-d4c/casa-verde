import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-screen h-[320px] bg-white mt-[100px] font-montserrat">
      <div className="absolute bottom-0 bg-[url('/assets/vector/paintFooter.svg')] w-[585px] h-[110px] bg-no-repeat" />
      <div className="px-[320px] pt-[56px] grid grid-cols-3 gap-[70px]">
        <div className="col-span-1">
          <div>
            <Image
              src="/assets/vector/logo.svg"
              width="177px"
              height="42px"
              alt="Logo - Casa Verde"
            />
          </div>
          <ul className="flex">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="col-span-1 text-text/50">
          <h5 className="text-[22px] text-text mb-2">Rio de Janeiro</h5>
          <span>Rua Siqueira Campos, 171, 303 Copacabana</span>
          <span>Telefone: (21) 99876-0099</span>
        </div>
        <div className="col-span-1 text-text/50">
          <h5 className="text-[22px] text-text mb-2">São Paulo</h5>
          <span>Rua Anita Garibaldi, 33, 13 Sé</span>
          <span>Telefone: (11) 99875-2201</span>
        </div>
        <div className="absolute -bottom-2 right-8">
          <Image
            src="/assets/vector/ilustra.svg"
            width="331px"
            height="408px"
            alt="Arte minimalista, mulher regando as plantas"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
