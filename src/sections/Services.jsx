import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
    return (
        <section className="max-container flex justify-center flex-wrap gap-8">
            {services.map((service, i) => (<ServiceCard key={i} service={service}></ServiceCard>))}
        </section>
    )
}

export default Services