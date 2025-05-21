import Nav from "@components/Nav"
import HeroSection from "@components/HeroSection"
import AboutUs from "@components/AboutUs"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col text-center">
      <Nav />
      <HeroSection />
      <AboutUs />
    </section>
  )
}

export default Home