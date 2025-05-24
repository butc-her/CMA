import Image from 'next/image';
import Link from 'next/link';
import communityimg from '@public/hassan-kibwana-Ks1-CD31HUQ-unsplash.jpg'

const JoinCommunity = () => {
  return (
    <section className='relative top-[200px] w-full h-full flex flex-col justify-center items-center p-8 sm:top-[-60px] border-5 border-blue-900'>
        <div className="flex flex-col justify-between items-center w-full p-4 mx-auto gap-8 sm:flex-row sm:justify-between sm:items-center mt-20">

            <div className="flex flex-col justify-center items-center">
                <h2 className='text-6xl text-black font-bold mb-4 capitalize'>join our vibrant communities</h2>
                <p className='text-lg text-black mb-8'>Be part of a vibrant community that shares your passion for blockchain technology.</p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-5 w-full h-full realtive'>
                    <div className="border border-yellow-700 flex flext-col justify-center items-center sm:w-[100%]">
                        <Image 
                            alt="Discord"                 
                            src={communityimg}
                            className="h-full w-[100%] object-cover sm:w-[100%]" 
                        />    
                    </div>
                    <div className="border border-yellow-700 flex flex-col justify-center items-center gap-5 text-left p-5 sm:w-[100%] mt-10">
                        <h2 className="capitalize text-5xl md:font-bold text-black"><span className="uppercase">cma</span> developers community</h2>
                    
                        <p className='mb-8 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit tempore dolore doloribus unde nesciunt minima error perspiciatis laudantium, voluptates sed molestiae, quibusdam ipsum neque dolor. Tempora, ducimus esse. Facilis!</p>
                        <p className='mb-8 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit tempore dolore doloribus unde nesciunt minima error perspiciatis laudantium, voluptates sed molestiae, quibusdam ipsum neque dolor. Tempora, ducimus esse. Facilis!</p>
                        <p className='mb-8 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit tempore dolore doloribus unde nesciunt minima error perspiciatis laudantium, voluptates sed molestiae, quibusdam ipsum neque dolor. Tempora, ducimus esse. Facilis!</p>
                        <div className="flex justify-center items-center w-[100%] mt-4">
                            <Link href="/joincommuinty" className="text-white font-bold py-2 px-4 w-[100%] text-center rounded-lg shadow-lg hover:bg-[#ff8f00] transition duration-300">
                                <button className="bg-[#ff6f00] px-6 py-3 text-white w-[70%] font-bold py-2 px-4 rounded-full shadow-lg hover:bg-[#ff8f00] transition duration-300 ease-in-out">
                                    Join our community
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JoinCommunity