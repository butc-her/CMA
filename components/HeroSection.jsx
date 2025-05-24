import Image from 'next/image'
import Nav from '@components/Nav'
import Link from 'next/link'
import heroImage from '@public/milad-fakurian-wNsHBf_bTBo-unsplash.jpg'

const HeroSection = () => {
  return (
    <div className="h-screen w-full relative top-[-59.7px]  bg-linear-to-r from-[rgba(0, 0, 0, 0.9)] to-[rgba(0, 0, 0, 0.9)]  border border-2 border-green-500">
        <Image 
            src={heroImage} 
            alt="hero" 
            layout='fil'
            objectFit='cover'
            quality={100}
            priority
            className="absolute h-screen animate-pluse z-[-1] w-full object-cover" 
        />
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <h1 className="p-2 text-5xl font-bold mb-4 uppercase"><span className='text-[#ff6f00]'>Blockchain</span> FOR <span className="bg-[#ff6f00] text-[#1c1c1c]">everyone</span></h1>
            <p className="text-lg mb-8">Your one-stop solution for all your needs.</p>
            <div className="flex flex-row gap-3 justify-evenly items-center">
              <Link href='/bootcamps' className="bg-[#f66f00] text-[#f8f8f8] px-6 py-3 rounded-lg hover:bg-[#FF7D19] hover:text-[#ff6f00] transition duration-300 capitalize">
                our bootcamp
              </Link>
              <Link href='/events' className="border border-[#ff6f00] text-[#f8f8f8] px-6 py-3 rounded-lg hover:text-[#ff6f00] hover:border hover:border-[#1c1c1c] transition duration-300 capitalize">
                our event
              </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection