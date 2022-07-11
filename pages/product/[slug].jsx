import Image from 'next/image'
import { cmsService } from '../../cms/cmsService'
import Feedbacks from '../../components/Feedbacks'
import { products } from '../../data'


export async function getStaticPaths({}) {
  const paths = products.map((product) => {
    return { params:  { slug: `${product.id}` } }
  })

  return {
    paths: paths,
    fallback: false, 
  }
}

export async function getStaticProps(ctx) {
  console.log(ctx.params.slug)
  const FeedbackQuery = `
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

  const ProductQuery = `
    query{
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

  const feedback = await cmsService({
    query: FeedbackQuery,
  })

  const product = await cmsService({
    query: ProductQuery,
  })

  return {
    props: {
      cmsFeedbackContent: feedback,
      cmsProductContent: product,
      slug: ctx.params.slug,
    },
  }
}

const Product = (props) => {
  // const router = useRouter()
  // const { slug } = router.query

  return (
    <main>
      <section className="relative md:h-[90vh] px-[16px] md:px-0 md:grid grid-cols-2 gap-[250px] md:pr-20">
        <div className="col-span-1">
          <div className="w-[1038px] absolute bottom-[-550px] left-[-200px] bg-no-repeat h-[1038px] hidden md:block bg-[url('/assets/vector/paintProduct.svg')] -z-20" />
          <div
            className="md:w-[900px] w-[430px] h-[285px] md:h-[600px] absolute bottom-40 left-0 md:bottom-0 bg-contain bg-no-repeat -z-10"
            style={{ backgroundImage: `url(${products[props.slug].img})` }}
          />
        </div>
        <div className="col-span-1 pt-[80px]">
          <h1 className="font-black text-[32px] md:text-[82px] md:leading-[82px]">
            {products[props.slug - 1].title}
          </h1>
          <span className="font-montserrat text-text/50 pt-[10px] pb-[30px] block">
            R$ 20,00
          </span>
          <p className="font-montserrat text-text/50 pb-[30px]">
            Sed arcu risus, posuere viverra imperdiet eu, commodo interdum enim.
            Suspendisse finibus, quam dictum vestibulum tristique, nisi lectus
            luctus tellus, eget faucibus
          </p>
          <div className="md:flex gap-[30px] pt-[175px] md:pt-0">
            <button className="w-full md:w-auto mb-[17px] md:mb-0 font-bold bg-yellow text-white py-[28px] px-[24px] font-montserrat hover:cursor-pointer">
              Comprar agora
            </button>
            <button className="w-full md:w-auto mb-12 md:mb-0 font-bold bg-transparent text-yellow border-[1px] font-montserrat border-yellow py-[28px] px-[40px]">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-[80px] px-4 md:px-[150px] bg-white">
        <div className="grid-cols-5 md:grid">
          <div className="col-span-3 pr-[30px]">
            <h1 className="text-text font-black text-[32px] md:text-[42px] mt-4 mb-2 md:mb-8">
              Descrição do produto
            </h1>
            <div className="flex">
              <div className="hidden md:block w-[75px] mr-[30px]">
                <div className="hidden bg-yellow p-5 w-[72px] h-[72px] rounded-full relative mt-9 mr-[30px] md:block">
                  <span className="bg-[url('/assets/vector/hashtag.svg')] absolute top-[30%] left-[26%] block w-[46px] h-[28px] bg-contain bg-no-repeat" />
                </div>
              </div>
              <p className="leading-7 text-text/50 font-montserrat">
                Sed arcu risus, posuere viverra imperdiet eu, commodo interdum
                enim. Suspendisse finibus, quam dictum{' '}
                <span className="hidden md:block">
                  vestibulum tristique, nisi lectus luctus tellus, eget faucibus
                  tortor magna vel arcu. Aliquam nisl ligula, pretium ut erat
                  pharetra, volutpat tempus quam. Quisque sed velit nec ex
                  tincidunt auctor eu sit amet libero. <br /> <br /> Aliquam
                  pulvinar, lacus id efficitur rutrum, lacus ex pretium libero,
                  non euismod sem neque sit amet elit. Sed varius augue eget
                  augue cursus, vel maximus sem rutrum. Vivamus dapibus lacus a
                  dui tristique, sodales cursus justo gravida. Mauris vehicula
                  lobortis diam porttitor scelerisque. Sed ac quam ligula.
                  Phasellus convallis ipsum nec lorem tincidunt viverra. Sed
                  elementum nunc velit, id congue mi posuere eget. Phasellus
                  imperdiet est ac ex blandit fringilla. Vivamus eget aliquet
                  leo, eu scelerisque quam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </span>
                <span className="block font-bold md:hidden text-yellow font-montserrat">
                  Ler mais
                </span>
              </p>
            </div>
          </div>
          <div className="hidden col-span-2 md:block">
            <Image
              src="/assets/images/plants/produtoinfo1.png"
              width="480px"
              height="562px"
              alt="Produto"
            />
          </div>
        </div>
      </section>

      <Feedbacks
        img={props.cmsContent.allFeedbackContents[1].image.url}
        feedback={props.cmsContent.allFeedbackContents[1].feedback}
        client={props.cmsContent.allFeedbackContents[1].client}
        date={props.cmsContent.allFeedbackContents[1].date}
      /> 
    </main>
  )
}

export default Product
