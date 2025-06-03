import Link from 'next/link'
import Image from 'next/image';
import teamMember1 from '@public/ceo.jpg';
import teamMember2 from '@public/admin.jpg';
import teamMember3 from '@public/founder.jpg';
import { FaXTwitter, FaTelegram, FaLinkedin } from "react-icons/fa6";


const OurTeam = () => {
    const socialItems = [
        { label: <FaXTwitter />, href: "/twitter" },
        { label: <FaTelegram />, href: "/telegram" },
        { label: <FaLinkedin />, href: "/linkedin" },
    ];

  return (
    <div className='border border-orange-600'>
        <div className="">
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 mb-8">We are a diverse group of professionals dedicated to making a difference.</p>
            <div className="flex flex-col md:flex-row justify-center items-center py-6 px-8 gap justify-center items-center sm:flex-row gap-6">
                <div className="h-screen">
                    <Image src={teamMember1} alt='Team Picture' width={487} height={600} className='relative z-20 h-[450px] md:h-[400px]'  />
                    <div className="flex flex-col items-center gap-2 w-full px-2 pt-1 pb-4">
                        <h3 className="text-3xl font-bold" >John Doe</h3>
                        <hr className="bg-[ff6f00]" />
                        <p className="">Founder and CEO,CMA</p>
                        <div className="flex items-center justify-center gap-2">
                            <ul className="flex sm:flex sm:flex-row justify-center items-center mt-0">
                                {socialItems.map((item) => (
                                    <li
                                    key={item.href}
                                    className="text-2xl font-bold mx-4 transition-colors duration-200 hover:text-[#FF6F00]"
                                    >
                                    <Link href={item.href} className="text-[ff6f00] font-blod hover:underline hover:decoration-[#FF6F00]">
                                        {item.label}
                                    </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>                
                    </div>
                </div>
                <div className="h-screen">
                    <Image src={teamMember2} alt='Team Picture' width={487} height={600} className='relative z-20 h-[450px] md:h-[400px]'  />
                    <div className="flex flex-col items-center gap-2 w-full px-2 pt-1 pb-4">
                        <h3 className="text-3xl font-bold" >John Doe</h3>
                        <hr className="bg-[ff6f00]" />
                        <p className="">Founder and CEO,CMA</p>
                        <div className="flex items-center justify-center gap-2">
                            <ul className="flex sm:flex sm:flex-row justify-center items-center mt-0">
                                {socialItems.map((item) => (
                                    <li
                                    key={item.href}
                                    className="text-2xl font-bold mx-4 transition-colors duration-200 hover:text-[#FF6F00]"
                                    >
                                    <Link href={item.href} className="text-[ff6f00] font-blod hover:underline hover:decoration-[#FF6F00]">
                                        {item.label}
                                    </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>                
                    </div>
                </div>
                <div className="h-screen">
                    <Image src={teamMember3} alt='Team Picture' width={487} height={600} className='relative z-20 h-[450px] md:h-[400px]'  />
                    <div className="flex flex-col items-center gap-2 w-full px-2 pt-1 pb-4">
                        <h3 className="text-3xl font-bold" >John Doe</h3>
                        <hr className="bg-[ff6f00]" />
                        <p className="">Founder and CEO,CMA</p>
                        <div className="flex items-center justify-center gap-2">
                            <ul className="flex sm:flex sm:flex-row justify-center items-center mt-0">
                                {socialItems.map((item) => (
                                    <li
                                    key={item.href}
                                    className="text-2xl font-bold mx-4 transition-colors duration-200 hover:text-[#FF6F00]"
                                    >
                                    <Link href={item.href} className="text-[ff6f00] font-blod hover:underline hover:decoration-[#FF6F00]">
                                        {item.label}
                                    </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>                
                    </div>
                </div>
                
            </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default OurTeam