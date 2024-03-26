import { star } from "../assets/icons";

const ReviewCard = ({ review }) => {
    const { rating, imgURL, customerName, feedback } = review;
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={imgURL} alt="customer" className="rounded-full w-[120px] h-[120px] object-cover" />
            <p className="mt-6 max-w-sm info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2">
                <img src={star} alt="" width={24} height={24} className="object-contain  m-0" />
                <p className="font-montserrat text-slate-gary text-xl ">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-center text-3xl font-bold ">{customerName}</h3>
        </div>
    )
}

export default ReviewCard