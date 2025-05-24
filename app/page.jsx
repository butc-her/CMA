import Nav from "@components/Nav"
import HeroSection from "@components/HeroSection"
import AboutUs from "@components/AboutUs"
import JoinCommunity from "@components/JoinCommunity"
// import Activities from "@components/Activities"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col text-center">
      <Nav />
      <HeroSection />
      <AboutUs />
      <JoinCommunity />
      {/* <Activities /> */}
    </section>
  )
}

export default Home