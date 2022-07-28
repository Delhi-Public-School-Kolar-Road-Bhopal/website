import Head from 'next/head'
import Header from '../components/home/header'
import Venue from '../components/home/venue_timing'
import InfoSection from '../components/home/infoSection'
import Footer from '../components/home/footer'
import Register from '../components/home/register'
const Home = () => {
  return (<div>
    <Head>
      <title>DPS Kolar Tech Fest</title>
    </Head>
    <Header
      title={"Welcome To DPS Kolar Tech Fest"}
      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      video={{ src: '/cover.mp4' }} />
    <Venue />
    <InfoSection />
    <Register />
    <Footer />
  </div>
  )
}

export default Home