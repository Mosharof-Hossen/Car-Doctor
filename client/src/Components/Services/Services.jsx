import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://car-doctor-server-rosy-xi.vercel.app/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-14 space-y-8">
            <div className="text-center space-y-5">
                <p className="text-xl text-primary-c font-bold mt-10">Service</p>
                <h3 className="text-4xl font-bold">Our Service Area</h3>
                <p className="text-base md:w-2/3 mx-auto text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;