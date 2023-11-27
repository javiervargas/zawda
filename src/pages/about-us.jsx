import Navbar from '../../components/navbar/navbar.component';
import AboutUsBanner from '../../components/about-us-banner/about-us-banner.component';
import Team from '../../components/team/team.component';
import Footer from '../../components/footer/footer.component';
import Connect from '../../components/connect/connect.component';
import Head from 'next/head';
const AboutUs = () => {
   const languageLinks = [
        { label: "EN", href: "/about-us" },
        { label: "AR", href: "/ar/about-us" }
    ]
    return (
        <>
          <Head>
        <title>ZAWDA</title>
        <meta name="title" content="About Zawda: Pioneering Bitcoin Wealth in MENA Region" />
        <meta name="description" content="Explore Zawda's origin inspired by financial challenges in emerging economies. Meet our team who's making Bitcoin adoption accessible across Middle East and North Africa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Zawda-Favicon.png" />
      </Head>
        <Navbar languageLinks={languageLinks}/>
        <AboutUsBanner/>
        <Team/>
        <Connect/>
        <Footer/>
        </>
    )
}

export default AboutUs;