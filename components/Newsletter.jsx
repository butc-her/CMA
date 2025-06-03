import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className="border border-pink-700">
        <div className="">
                {/* <Image src="/images/newsletter-bg.jpg" alt="Newsletter Background" width={50} height={50} className="" />    */}
            <div className="">
                <h2 className="text-5xl">Subscribe to our Newletter</h2>
                <p className="text-2xl">Stay updated with the latest news and offers</p>
            </div>
            <form action="" className=""> 
                <input type="email" placeholder="Enter your email" className="p-4 border border-gray-300 rounded-md w-full sm:w-full" />
                <button type="submit" className="bg-[#ff6f00] text-white rounded-md p-4 hover:bg-[#ff7f00] p-3 hover:bg-[#ff7f00]">Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter