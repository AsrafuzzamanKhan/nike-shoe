import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-bold font-palanquin text-4xl text-center ">
                What Our <span className="text-coral-red">Coustomers</span> Say?
            </h3>
            <p className="text-lg mx-auto text-center font-montserrat mt-4 max-w-lg leading-normal text-slate-gray">Here genuine stories from our satisfied coustomers about their expectaional experience with us.</p>

            <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews