import Image from 'next/image'
import Nav from '@components/Nav'
// import heroImage from '../public/CMALogo.png'

const HeroSection = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] relative ">
        <Nav />
        {/* <Image 
            src={heroImage} 
            alt="hero" 
            layout='fil'
            objectFit='cover'
            quality={100}
            priority
            className="absolute h-screen animate-pluse" 
        /> */}
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <h1 className="text-5xl font-bold mb-4">Blockchain FOR <span className="uppercase border border-gray-900 bg-">everyone</span></h1>
            <p className="text-lg mb-8">Your one-stop solution for all your needs.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</button>
        </div>
    </div>
  )
}

export default HeroSection