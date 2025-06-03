import Link from "next/link";

const Footer = () => {
    const aboutItems = [
        { label: "About", href: "/about" },
        { label: "Partnership", href: "/partnership" },
        { label: "Blog", href: "/blog" },
        { label: "Privacy", href: "/privacy" },
    ];

    const eventItems = [
        { label: "Events", href: "/events" },
        { label: "Bootcamps", href: "/bootcamps" },
        { label: "Community", href: "/community" },
    ];

    const contactItems = [
        { label: "Instagram", href: "/instagram" },
        { label: "LinkedIn", href: "/linkedin" },
        { label: "Facebook", href: "/facebook" },
        { label: "Telegram", href: "/telegram" },
        { label: "Youtube", href: "/youtube" },
        { label: "Twitter", href: "/twitter" },
    ];
  return (
    <footer className="border border-blue-500">
        <div className="">
            <div className="">
                <p className="text-3xl text-black">About</p>
                <ul className="">
                    {aboutItems.map((item) => (
                        <li key={item.href} className="">
                        <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <p className="text-3xl text-black">Events</p>
                <ul className="">
                    {eventItems.map((item) => (
                        <li key={item.href} className="text-1xl text-black mb-6">
                        <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <p className="text-3xl text-black">Contact</p>
                <ul className="flex flex-col">
                    {contactItems.map((item) => (
                        <li key={item.href} className="text-1xl text-black mb-6">
                        <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] mb-4">Stay in the loop</h2>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis atque sunt sapiente molestiae temporibus ex vero, voluptate perferendis commodi obcaecati.</p>
                <form className="flex flex-col sm:flex-row items-center gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f00] w-full sm:w-auto"
                    />
                    <button 
                        type="submit" 
                        className="bg-[#ff6f00] text-white px-4 py-2 rounded-lg hover:bg-[#ff7f00] transition-colors duration-200"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <div className="">
            <p>Copyright &copy;	&#169; 2025 ChainMaster Academy - CMA&copy;	&#169;. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer