import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
