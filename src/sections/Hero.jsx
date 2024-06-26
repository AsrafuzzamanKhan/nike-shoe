import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCars from "../components/ShoeCars"
import { shoes, statistics } from "../constants"

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section id="home"
            className="w-full min-h-screen flex xl:flex-row flex-col justify-center  max-container gap-10">
            <div className="  xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 relative">
                <p className="text-xl font-montserrat text-coral-red">Our summer collection</p>
                <h1 className="mt-10 font-palanquin text-[60px] md:text-8xl lg:text-[70px]  max-sm:leading-[82px] font-bold  ">
                    <span className=" xl:whitespace-nowrap pr-10">The New Arraival</span> <br />
                    <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="font-montserrat mt-8 mb-14 sm:max-w-sm  leading-8text-slate-gray">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                <Button label="Shop now" iconURL={arrowRight} />
                <div className="w-full flex justify-between items-start mt-20 flex-wrap ">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-[40px] lg:text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" flex-1 flex flex-col relative  justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
                <img src={bigShoeImg} alt="" width={610} height={500} className="object-contain " />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
                    {shoes.map((shoe) => (<div key={shoe}>
                        <ShoeCars imgURL={shoe}
                            changeBigShoeImg={(shoe) => { setBigShoeImg(shoe) }}
                            bigShoeImg={bigShoeImg}
                        />
                    </div>))}
                </div>
            </div>
        </section>
    )
}

export default Hero