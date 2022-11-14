
import Header from '../components/home/header'
import Venue from '../components/home/venue_timing'
import InfoSection from '../components/home/infoSection'
import Register from '../components/home/register'
const Home = () => {
  return (<div>

    <Header
      title={"Welcome To the Extra Quadrata Tech Fest"}
      description={`We are invigorated and thrilled to announce that our school, DPS Kolar, is hosting the Extra Quadrata Tech Fest on the 16th of November. Our event encompasses a diverse array of sub-events, ranging from gaming to programming.`}
      video={{ src: '/Dps Cover.mp4' }} />
    <Venue />
    <InfoSection /> 
    <Register />
    
  </div>
  )
}

export default Home