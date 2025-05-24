import Link from 'next/link'
import Image from 'next/image';
import aboutImg from '@public/guerrillabuzz-8GXpptuzqBw-unsplash.jpg'
const AboutUs = () => {
return (
    <section className="w-full flex flex-center items-center flex-col bg-gray-100 h-screen border border-2 border-red-500 relative top-[-59.7px]">
        <div className="absolute top-30 flex flex-col justify-between items-center w-full p-4 mx-auto gap-8 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col justify-center items-start gap-5 p-5 w-auto sm:w-1/2 ">
                <div className="flex flex-col justify-center items-start gap-5">
                    <h1 className="text-4xl text-left font-bold mb-2 uppercase">who are we?</h1>
                    <p className="text-lg text-left max-w-2xl">
                        We are a team of passionate individuals dedicated to providing the best service possible. Our mission is to create a platform that connects people and fosters community.
                    </p>
                </div>
                <div className='flex flex-row sm:flex-row gap-5 sm:flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-5xl leading-none'>5k+</p>
                        <p className='capitalize text-sm font-light text-black'>community members</p>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-5xl leading-none'>10+</p>
                        <p className='capitalize text-sm font-light text-black'>bootcamps</p>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-5xl leading-none'>5</p>
                        <p className='capitalize text-sm font-light text-black'>events</p>
                    </div>
                </div>
                <div className="flex flex-row border-box gap-5 text-center sm:justify-between sm:items-center sm:gap-3">
                    <Link href="/about">
                        <button className='bg-[#ff6f00] px-6 py-3 rounded-lg rounded capitalize text-1xl text-white border border-transparent hover:bg-[#f8f8f8] hover:text-[#ff6f00] hover:border-[#ff6f00]'>
                        about us
                        </button>
                    </Link>
                    <Link href="/commiunity">
                        <button className='bg-none border border-[#ff6f00] px-6 py-3 rounded-lg rounded capitalize text-1xl text-[#1c1c1c] hover:bg-[#ff6f00] hover:text-white'>
                        our community
                        </button>
                    </Link>
                </div>

            </div>
            <div className="w-auto sm:w-1/2 flex justify-center items-center">
                <Image
                    src={aboutImg}
                    alt="About Us"
                    className="rounded-lg shadow-lg"
                />
            </div>            
        </div>
    </section>
)
}

export default AboutUs