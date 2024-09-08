import { Link, useLoaderData, useLocation } from "react-router-dom";
import checkoutBanner from "../../assets/images/checkout/checkout.png"
import { FaArrowRight, FaFileLines } from "react-icons/fa6";
import logo from "../../assets/logo.svg"

const ServiceDetails = () => {
    const loaderData = useLoaderData()
    const { img, title, facility, description, price } = useLoaderData()
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
                        <p className="text-base text-gray-500 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. </p>
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
                        <p className="text-gray-500 text-justify text-base">{description}</p>
                    </div>
                    <div className="space-y-4 my-8">
                        <h3 className="text-4xl font-bold">{title}</h3>
                        <p className="text-base text-gray-500 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. </p>
                        <div className="grid md:grid-cols-3 gap-5">
                            <div className="space-y-4 text-center border rounded p-10">
                                <h1 className="inline p-3 rounded-full bg-primary-c text-white font-bold text-xl border-orange-400 border-4">01</h1>
                                <p className="font-bold">Step One</p>
                                <p className="text-gray-500">It uses a dictionary of over 200 .</p>
                            </div>
                            <div className="space-y-4 text-center border rounded p-10">
                                <h1 className="inline p-3 rounded-full bg-primary-c text-white font-bold text-xl border-orange-400 border-4">02</h1>
                                <p className="font-bold">Step Two</p>
                                <p className="text-gray-500">It uses a dictionary of over 200 .</p>
                            </div>
                            <div className="space-y-4 text-center border rounded p-10">
                                <h1 className="inline p-3 rounded-full bg-primary-c text-white font-bold text-xl border-orange-400 border-4">03</h1>
                                <p className="font-bold">Step Three</p>
                                <p className="text-gray-500">It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 py-5 space-y-10">
                    <div className="bg-slate-100 p-5 rounded space-y-5">
                        <h4 className="text-2xl font-bold">Services</h4>
                        <p className="hover:bg-primary-c hover:text-white bg-white p-4 rounded font-semibold flex justify-between items-center"><span>Full Car Repair</span> <FaArrowRight /></p>
                        <p className="hover:bg-primary-c hover:text-white bg-white p-4 rounded font-semibold flex justify-between items-center"><span>Engine Repair</span> <FaArrowRight /></p>
                        <p className="hover:bg-primary-c hover:text-white bg-white p-4 rounded font-semibold flex justify-between items-center"><span>Automatic Services</span> <FaArrowRight /></p>
                        <p className="hover:bg-primary-c hover:text-white bg-white p-4 rounded font-semibold flex justify-between items-center"><span>Engine Oil Change</span> <FaArrowRight /></p>
                        <p className="hover:bg-primary-c hover:text-white bg-white p-4 rounded font-semibold flex justify-between items-center"><span>Battery Charge</span> <FaArrowRight /></p>
                    </div>

                    <div className="bg-[#151515] text-white p-5 rounded space-y-5 ">
                        <h4 className="text-2xl font-bold">Download</h4>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <FaFileLines className="text-3xl" />
                                <div>
                                    <p className="">Our Brochure</p>
                                    <p className="text-sm text-gray-400">Download</p>
                                </div>
                            </div>
                            <button className="bg-primary-c rounded p-3"><FaArrowRight></FaArrowRight></button>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <FaFileLines className="text-3xl" />
                                <div>
                                    <p className="">Company Details</p>
                                    <p className="text-sm text-gray-400">Download</p>
                                </div>
                            </div>
                            <button className="bg-primary-c rounded p-3"><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>

                    <div className="text-center bg-[#151515] text-white px-5 py-10 rounded space-y-5 ">
                        <img src={logo} alt="" className="mx-auto" />
                        <p>Need Help? We Are Here To Help You.</p>
                        <div className="bg-white text-black py-8 rounded relative">
                            <p><span className="text-primary-c font-bold">Car Doctor </span><span className="font-bold">Special</span> <br /> <span className="text-sm text-gray-500">Save up to</span> <span className="text-primary-c">60% off</span></p>
                            <button className="bg-primary-c text-white px-3 py-2 rounded absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2">Get A Quote</button>
                        </div>
                    </div>

                    <div className="  px-5  space-y-5 ">
                        <h3 className="text-3xl">Price ${price}</h3>
                        <Link to={"/"}> <button className="w-full px-3 py-2 bg-primary-c text-white rounded">Proceed Checkout</button></Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;