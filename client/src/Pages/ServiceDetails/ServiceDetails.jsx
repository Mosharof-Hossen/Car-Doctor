import { useLoaderData, useLocation } from "react-router-dom";


const ServiceDetails = () => {
    const loaderData = useLoaderData()
    const { img } = useLoaderData()
    const location = useLocation()
    console.log(location);
    console.log(loaderData);
    return (
        <div>
            <div>
                <div
                    className="relative hero h-[300px] bg-cover bg-center bg-no-repeat "
                    style={{
                        backgroundImage: `url(${img})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60 "></div>
                    <div className="hero-content text-neutral-content text-center ">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Service Details</h1>

                            <button
                                disabled
                                style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 trapezium bg-primary-c text-white font-bold py-3 px-8 hover:bg-blue-700 transition duration-300">
                                Home/Service Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;