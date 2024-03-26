import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
    return (
        <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contain w-full" alt="" />
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-4xl font-montserrat font-semibold lg:max-w-lg"><span className="text-coral-red">Spacial </span> Offer</h1>
                <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
                <p className="mt-6 info-text lg:max-w-lg">Our dedication to detail and excellence ensure your satisfaction.</p>
                <div className="mt-8 flex gap-4 flex-wrap">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button label='Learn more' backgroundColor='bg-white'
                        borderColor='border-slate-gray'
                        textColor='text-slate-gray' />
                </div>

            </div>
        </section>
    )
}

export default SpecialOffer