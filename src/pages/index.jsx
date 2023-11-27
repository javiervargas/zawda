import Head from 'next/head'
import Navbar from '../../components/navbar/navbar.component';
import HomeBanner from '../../components/home-banner/home-banner.component';
import About from '../../components/about/about.component';
import Pricing from '../../components/pricing/pricing.component';
import Security from '../../components/security/security.component';
import Partners from '../../components/partners/partners.component';
import Footer from '../../components/footer/footer.component';
import Faq from '../../components/faq/faq.component';
import Calculator from '../../components/calculator/calculator.component';




export default function Home() {
 


  return (
    <>
      <Head>
        <title>ZAWDA</title>
        <meta name="title" content="Zawda: Bitcoin Wealth Preservation & Financial Security Solutions" />
        <meta name="description" content="Discover Zawda's mission to redefine wealth creation using Bitcoin. Secure & compliant solutions for businesses & individuals to save, hedge against volatility, and achieve financial goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Zawda-Favicon.png" />
      </Head>
      <Navbar/>
      <HomeBanner/>
      <About/>
      <Pricing/>
      <Security/>
      <Partners/>
      <Calculator/>
      <Faq/>
      <Footer/>
    </>
  )
}
