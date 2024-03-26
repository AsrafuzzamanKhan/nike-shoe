import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="" width={150}
                            height={46} />
                    </a>
                    <p className="text-white mt-6 text-base leading-7 font-montserrat sm:max-w-sm ">Get Shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>

                    <div className="flex items-center gap-4 mt-8">
                        {socialMedia.map((social, i) => (
                            <div key={i} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src={social.src}
                                    alt={social.alt}
                                    width={24}
                                    height={24} />
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section, i) => (
                        <div key={i}>
                            <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6 ">{section.title}</h4>
                            <ul>
                                {section.links.map((link, index) => (
                                    <li key={index} className="text-white mt-2 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                                        <a href=""> {link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:text-center">
                <div className="flex flex-1 font-montserrat justify-start items-center gap-2 max-sm:mx-auto">
                    <img src={copyrightSign} alt="copy right" width={20} height={20} className="rounded-full m-0" /> <p>Copyright. All rights reserved.</p>
                </div>
                <p className="  font-montserrat cursor-pointer">Terms & Conditions</p>

            </div>
        </footer>
    )
}

export default Footer;