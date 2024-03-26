import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
    const { imgURL, name, price } = product;
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[240px] h-[280px]" />
            <div className="mt-4 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className="leading-normal mt-2 font-semibold font-palanquin text-2xl">{name}</h3>
            <p className="leading-normal mt-2 font-montserrat font-semibold tex-2xl text-coral-red">{price}</p>
        </div>
    )
}

export default PopularProductCard