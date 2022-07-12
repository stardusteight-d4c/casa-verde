import Head from 'next/head'

import SaleCard from '../components/SaleCard'
import VideoCard from '../components/VideoCard'
import Feedbacks from '../components/Feedbacks'

import { HiOutlineMail } from 'react-icons/hi'
import { FiMousePointer } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import { FiTruck } from 'react-icons/fi'

import { videos } from '../data'
import { cmsService } from '../cms/cmsService'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const feedbackQuery = `
  query {
    allFeedbackContents(orderBy: _createdAt_ASC) {
      id
      image {
        url
      }
      feedback
      client
      date
      _firstPublishedAt
    }
  }`

  const productQuery = `
  query {
    allProductContents(orderBy: _createdAt_ASC) {
      id
      title
      image {
        url
      }
      price
    }
  }  
  `

  const feedbackResponse = await cmsService({
    query: feedbackQuery,
  })

  const productResponse = await cmsService({
    query: productQuery,
  })

  return {
    props: {
      cmsFeedbackContent: feedbackResponse,
      cmsProductContent: productResponse,
    },
    revalidate: 60,
  }
}

export default function Home({ cmsFeedbackContent, cmsProductContent }) {
  // console.log(cmsProductContent);
  return (
    <>
      <Head>
        <title>Casa Verde</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="relative md:grid-cols-2 md:grid h-[100vh] md:h-[880px]">
          <div className="md:mt-[80px] 2xl:ml-[358px] mt-[34px] ml-4 md:ml-[100px] col-span-1">
            <p className="font-montserrat text-text/50 text-[22px]">
              Sua casa com as
            </p>
            <h1 className="mb-6 font-black text-[32px] md:text-[82px] text-text font-sans leading-[36px] md:leading-[94px]">
              melhores plantas
            </h1>
            <p className="w-[200px] md:w-auto font-normal font-montserrat text-text/50 leading-[26px] pr-6">
              Encontre aqui uma vasta seleção de plantas para decorar a sua casa
              e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
              e-mail e assine nossa newsletter para saber das novidades da
              marca.
            </p>
            <div className="relative items-center block md:bg-white md:flex font-montserrat shadow-custom-shadow mt-9">
              <HiOutlineMail
                size={24}
                className="absolute top-7 md:top-1/3 left-5 text-text/50"
              />
              <input
                type="email"
                placeholder="Insira seu e-mail"
                className="mb-4 md:mb-0 w-[95%] m-auto md:w-[65%] text-text/50 py-7 pl-14 focus:outline-none"
              />
              <button className="px-5 w-[95%] md:w-[35%] font-bold text-center text-white bg-yellow py-7">
                Assinar newsletter
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <div className="absolute -top-5 md:-top-20 right-[-720px] 2xl:-right-16 md:-right-28 bg-[url('/assets/vector/paint.svg')] w-[850px] h-[1150px] 2xl:w-[1009px] 2xl:h-[1087px] bg-no-repeat -z-20 bg-contain" />
            <div>
              <div className="absolute right-0 top-36 md:-top-24 2xl:right-[400px] md:right-32 bg-[url('/assets/images/heroImage.png')] w-[226px] md:w-[787px] h-[340px] md:h-[1000px] 2xl:h-[1183px] bg-no-repeat -z-10 bg-contain" />
            </div>
          </div>
        </section>

        <section
          className="w-[95vw] -mt-16 md:w-auto 2xl:w-[995px] m-auto md:mx-[200px] 2xl:m-auto shadow-custom-shadow"
          id="como_conseguir"
        >
          <div className="grid grid-cols-5">
            <div className="hidden md:block col-span-3 bg-[url('/assets/images/myPlant.png')] bg-cover bg-no-repeat h-[440px]"></div>
            <div className="col-span-5 bg-white md:col-span-2">
              <div className="pt-[58px] pl-[24px] md:block">
                <span className="text-[22px] text-text/50 font-montserrat block">
                  Como conseguir
                </span>
                <strong className="text-text text-[42px] font-black mb-[32px] mt-[12px] block">
                  minha planta
                </strong>
                <ul className="flex flex-col gap-8 font-montserrat text-text/50 ">
                  <li className="text-[22px] flex items-center gap-4">
                    <span className="inline-block p-3 rounded-full bg-yellow">
                      <FiMousePointer size={18} className="text-white" />
                    </span>
                    Escolha suas plantas
                  </li>
                  <li className="text-[22px] flex items-center gap-4">
                    <span className="inline-block p-3 rounded-full bg-yellow">
                      <FiShoppingCart size={18} className="text-white" />
                    </span>
                    Faça seu pedido
                  </li>
                  <li className="text-[22px] flex items-center gap-4">
                    <span className="inline-block p-3 rounded-full bg-yellow">
                      <FiTruck size={18} className="text-white" />
                    </span>
                    Aguarde na sua casa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-[44px] mx-auto md:block md:mx-[100px]"
          id="ofertas"
        >
          <div className="text-center">
            <span className="font-montserrat text-text/50 text-[22px]">
              Conheça nossas
            </span>
            <h3 className="font-black text-[82px] text-text">ofertas</h3>
          </div>
          <div className="md:grid grid-cols-3 grid-rows-2 flex flex-col items-center gap-4  md:gap-[30px] m-auto max-w-[1166px]">
            {cmsProductContent.allProductContents.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <a>
                  <SaleCard
                    key={product.id}
                    title={product.title}
                    img={product.image.url}
                    price={product.price}
                  />
                </a>
              </Link>
            ))}
          </div>
        </section>

        <Feedbacks
          img={cmsFeedbackContent.allFeedbackContents[0].image.url}
          feedback={cmsFeedbackContent.allFeedbackContents[0].feedback}
          client={cmsFeedbackContent.allFeedbackContents[0].client}
          date={cmsFeedbackContent.allFeedbackContents[0].date}
        />

        <section
          className="mt-[108px] mx-auto md:block md:mx-[100px]"
          id="videos"
        >
          <div className="text-center">
            <span className="font-montserrat text-text/50 text-[22px]">
              Veja aqui os nossos
            </span>
            <h3 className="font-black text-[32px] md:text-[82px] text-text">
              vídeos
            </h3>
          </div>
          <div className="w-[80%] items-center mx-auto flex-col md:flex-row flex justify-between gap-[30px] md:w-[1166px] md:mx-auto">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                img={video.img}
                title={video.title}
                date={video.date}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
