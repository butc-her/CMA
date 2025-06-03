"use client"
import Link from 'next/link'
import Image from 'next/image';

const OurBlog = () => {
  return (
    <section className='border border-purple-600'>
        <div className="">
            <div className="">
                <h2 className="text-6xl">Our Blog</h2>
            </div>
            <div className="">
                <div className="h-[80vh]">
                    <div className="">
                        <Image
                            src="/blog.png"
                            alt="Blog Image"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                    
                    </div>
                    <div className="">
                        <span className="capitalize">crypto</span>
                        <span className="capitalize">news</span>
                    </div>
                    <div className="">
                        <h3 className="">Blockchain's mind-blowing potential</h3>
                        <p className="">Discover how blockchain technology is revolutionizing industries, enhancing security, and driving innovation.</p>
                        <Link href="/blog" className="text-blue-500 hover:underline">
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <div className="">
                            <Image
                                src="/blog.png"
                                alt="Blog Image"
                                width={40}
                                height={40}
                                className="rounded-lg shadow-lg"
                            />
                    
                        </div>
                        <div className="">
                            <span className="capitalize">crypto</span>
                            <span className="capitalize">news</span>
                        </div>
                        <div className="">
                            <h3 className="">Blockchain's mind-blowing potential</h3>
                            <p className="">Discover how blockchain technology is revolutionizing industries, enhancing security, and driving innovation.</p>
                            <Link href="/blog" className="text-blue-500 hover:underline">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <Image
                                src="/blog.png"
                                alt="Blog Image"
                                width={40}
                                height={40}
                                className="rounded-lg shadow-lg"
                            />
                        
                        </div>
                        <div className="">
                            <span className="capitalize">crypto</span>
                            <span className="capitalize">news</span>
                        </div>
                        <div className="">
                            <h3 className="">Blockchain's mind-blowing potential</h3>
                            <p className="">Discover how blockchain technology is revolutionizing industries, enhancing security, and driving innovation.</p>
                            <Link href="/blog" className="text-blue-500 hover:underline">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurBlog