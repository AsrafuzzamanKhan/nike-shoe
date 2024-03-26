import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-4xl font-montserrat font-semibold lg:max-w-lg">We Provide you <span className="text-coral-red">Super Quality </span> Shoes</h1>
                <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
                <p className="mt-6 info-text lg:max-w-lg">Our dedication to detail and excellence ensure your satisfaction.</p>
                <div className="">
                    <Button label="View details" />
                </div>

            </div>
            <div className="flex-1 flex items-center justify-center">
                <img src={shoe8} alt="shoe8" width={570}
                    height={522}
                    className="object-contain" />
            </div>
        </section>
    )
}

export default SuperQuality