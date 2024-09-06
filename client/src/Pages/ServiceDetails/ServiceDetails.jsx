import { useLoaderData, useLocation } from "react-router-dom";
import checkoutBanner from "../../assets/images/checkout/checkout.png"

const ServiceDetails = () => {
    const loaderData = useLoaderData()
    const { img, title, facility } = useLoaderData()
    const location = useLocation()
    console.log(location);
    console.log(loaderData);
    return (
        <div className="p-5">

            <div
                className="relative hero h-[300px] bg-cover bg-center bg-no-repeat "
                style={{
                    backgroundImage: `url(${checkoutBanner})`,
                }}>
                <div className="hero-overlay bg-opacity-70 "></div>
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

            <div className="grid lg:grid-cols-3 col-span-1 mt-10">
                <div className="lg:col-span-2 p-5">
                    <img src={img} alt="" className="h-[400px] w-full rounded-lg" />
                    <div className="space-y-4 my-8">
                        <h3 className="text-4xl font-bold">{title}</h3>
                        <p className="text-base text-gray-500 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                            {
                                facility?.map((item, i) => <div key={i}
                                className="space-y-2 p-5 border-t-4 rounded-xl bg-slate-100 border-primary-c"
                                >
                                    <p className="text-xl font-bold">{item.name}</p>
                                    <p className="text-gray-500 text-justify text-base">{item.details}</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">cheackout</div>
            </div>
        </div>
    );
};

export default ServiceDetails;