import Head from 'next/head'
import Header from '../components/home/header'

const Home = () => {
  return (<div>
    <Head>
      <title>DPS Kolar Tech Fest</title>
    </Head>
    <Header title={"Welcome To DPS Kolar Tech Fest"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "} video={{src:"https://stream.mux.com/yWpX7DynQ3pEX8t01B5xOBoTuMoqRGVH8/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTc5Njc5MTUsImF1ZCI6InYiLCJzdWIiOiJ5V3BYN0R5blEzcEVYOHQwMUI1eE9Cb1R1TW9xUkdWSDgifQ.KBjjR_U8MPj97006dlLVA-5AoUVCqMG6V0Zz328JIOuzTmYzBxJVr6_oUDknfxsZHrdaVpc0jArlX96WbpDh-tCiLfrhOOTECp9ginfpnyRDaZXsb6tP4ajrBdZldQh6Du2vDP2RzTTyEZHc0hLoeLJxOZZP9pV8QtP74Vq7IFEhdxV1sOo0sxeneWeIu5p5LXBsFHWXyrVxColmTJhSmSoaYGJKGj1b_j5UA93Cy60Vv_xaEW-98zFUBP0mxorbA_s99JtGjNpw2-4cSldyMBl8nAtelYc5DalAZQMwP743ohkmlo_GEl4L-hOVl3aQT5I_p7a_BhRDQ0-TGL4tOg"}}/>
  </div>
  )
}

export default Home