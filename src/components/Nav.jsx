import headerLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { navLinks } from '../constants/index'
import { useState } from 'react'
const Nav = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <header className='padding-x py-8 z-10 w-full relative'>
            <nav className='flex items-center justify-between max-container '>
                <a href="/">
                    <img src={headerLogo} alt="Logo"
                        width={130}
                        height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-4 max-lg:hidden '>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal rounded-lg text-lg text-slate-gray hover:bg-slate-100 px-4 py-2'>
                                {item.label}
                            </a>
                        </li>
                    ))}

                </ul>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt=""
                        width={25}
                        height={25}
                        className='cursor-pointer'
                        onClick={() => setOpen(!open)} />
                </div>
                <div className={`${open ? 'right-0' : '-right-full'} w-[80%] fixed top-0 bottom-0 z-999   h-screen transition-all duration-200 overflow-hidden`}>
                    <div className='w-full h-full bg-black p-8 absolute '>
                        <div onClick={() => setOpen(false)}
                            className=" flex justify-end mb-8 cursor-pointer text-white text-3xl font-bold">
                            X
                        </div>
                        <ul className='flex flex-col items-center gap-4'>
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray ' onClick={() => setOpen(!open)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav