import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12 " >
            < div className="flex flex-col justify-start gap-5" >
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="text-slate-gray font-montserrat mt-2 lg:max-w-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dicta facilis optio laboriosam! Iste laboriosam minima cupiditate aperiam itaque magni!</p>
            </div >

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <PopularProductCard
                        key={product.name}
                        product={product} />
                ))}
            </div>

        </section >
    )
}

export default PopularProducts