import React from 'react'

const Feedbacks = ({ img, feedback, client, date }) => {
  return (
      <section className="hidden pt-[108px] md:flex 2xl:grid grid-cols-2">
        <div
          className="md:w-[630px] 2xl:min-w-[668px] 2xl:w-[850px] block 2xl:col-span-1"
          id="depoimentos"
        >
          <div className="md:w-[450px] h-[430px] 2xl:w-[638px] 2xl:h-[580px] bg-yellow relative drop-shadow-xl">
            <div
              className="drop-shadow-xl w-[381px] 2xl:w-[481px] h-[445px] 2xl:h-[562px] bg-contain bg-no-repeat absolute top-[99px] -right-1/3"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        </div>

        <div className="md:mt-[88px] 2xl:mt-[160px] 2xl:col-span-1">
          <h4 className="font-black text-[38px] ml-[32px] 2xl:ml-0">
            Não acredite em nós <br /> veja o que os clientes tem a dizer
          </h4>
          <div className="w-[585px] mx-auto 2xl:mx-0 font-montserrat text-text/50 flex">
            <div className="w-[100px]">
              <div className="bg-yellow p-5 w-[72px] h-[72px] rounded-full relative mt-9 mr-[30px] block">
                <span className="bg-[url('/assets/vector/quote.svg')] absolute top-[30%] left-[17%] block w-[46px] h-[28px] bg-contain bg-no-repeat" />
              </div>
            </div>
            <div className="mt-9">
              <p className="md:pb-4 2xl:pb-8">{feedback}</p>
              <div className="flex flex-col items-start gap-1">
                <span className="text-text">{client}</span>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Feedbacks
