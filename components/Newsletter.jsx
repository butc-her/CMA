import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-120">
        <div className="max-w-screen-2xl mx-auto px-4 lg:p-10 flex flex-col items-center justify-center">
                {/* <Image src="/images/newsletter-bg.jpg" alt="Newsletter Background" width={50} height={50} className="" />    */}
            <div className="text-center flex flex-col items-centerjustify-center">
                <h2 className="inline text-2xl md:text-[2.5rem] leading-tight lg:leading-normal lg:text-[3.125rem]">Subscribe to our Newletter</h2>
                <p className="inline sm:text-[1.25rem] md:text-[1.5rem] tracking-tight">Stay updated with the latest news and offers</p>
            </div>
            <form action="" className="rounded-[70px] flex items-center justify-between p-2 mt-10 lg:w-[600px]"> 
                <input type="email" placeholder="Enter your email" className="py-3 px-6 w-full rounded-full border" />
                <button type="submit" className="bg-[#ff6f00] text-white rounded-[100px] h-full py-3 px-6 transition-color hover:bg-[#ff7f00]">Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter