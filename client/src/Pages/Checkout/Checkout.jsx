import { useLoaderData, useNavigate, } from "react-router-dom";

import checkoutBanner from "../../assets/images/checkout/checkout.png"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Checkout = () => {
    const { user } = useContext(AuthContext);
    const { _id, img, price, title, } = useLoaderData()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = shippingAddress => {
        const orderInfo = {
            userId: user.uid,
            productId: _id,
            img,
            price,
            title,
            orderDate: new Date(),
            shippingAddress,
            status: "Pending",
            userEmail: user?.email
        }

        fetch("https://car-doctor-server-rosy-xi.vercel.app/bookings", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
            ,
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Order Confirmed",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate("/order")
                    })
                }
            })
    }
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
                        <h1 className="mb-5 text-5xl font-bold">Check Out</h1>

                        <button
                            disabled
                            style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 trapezium bg-primary-c text-white font-bold py-3 px-8 hover:bg-blue-700 transition duration-300">
                            Home/Checkout
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h1 className="text-center text-3xl font-bold">Service name: {title}</h1>
            </div>
            <div className='p-10'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex gap-5 flex-col lg:flex-row ">
                        <div className="flex-1">

                            <label className="">
                                <p className="my-2 font-semibold text-xl">Name</p>
                                <input className="px-2 py-2 w-full rounded border dark:text-black" type="text" placeholder="Enter Your Name"  {...register("name", { required: true, maxLength: 80 })} />
                                {
                                    errors?.name?.type === "required" && (
                                        <p className="text-sm mt-1 text-red-500 " role="alert">Name is Required.</p>
                                    )
                                }
                            </label>
                            <label className="">
                                <p className="my-2 font-semibold text-xl">Phone Number</p>
                                <input className="px-2 py-2 w-full border rounded dark:text-black" type="text" placeholder="Enter Phone Number"  {...register("phoneNumber", { required: true, maxLength: 80 })} />
                                {
                                    errors?.phoneNumber?.type === "required" && (
                                        <p className="text-sm mt-1 text-red-500 " role="alert">Phone Number is Required.</p>
                                    )
                                }
                            </label>
                            <label className="">
                                <p className="my-2 font-semibold text-xl">City</p>
                                <input className="px-2 py-2 w-full border rounded dark:text-black" type="text" placeholder="Enter City Name"  {...register("city", { required: true, maxLength: 80 })} />
                                {
                                    errors?.city?.type === "required" && (
                                        <p className="text-sm mt-1 text-red-500 " role="alert">City is Required.</p>
                                    )
                                }
                            </label>
                        </div>

                        <div className="flex-1">
                            <label className="">
                                <p className="my-2 font-semibold text-xl">Zip</p>
                                <input className="px-2 py-2 w-full rounded border dark:text-black" type="text" placeholder="Enter Zip Code"  {...register("zip", { required: true, maxLength: 80 })} />
                                {
                                    errors?.zip?.type === "required" && (
                                        <p className="text-sm mt-1 text-red-500 " role="alert">Zip is Required.</p>
                                    )
                                }
                            </label>
                            <label className="">
                                <p className="my-2 font-semibold text-xl">Street</p>
                                <input className="px-2 py-2 w-full border rounded dark:text-black" type="text" placeholder="Enter Street"  {...register("street", { required: true, maxLength: 80 })} />
                                {
                                    errors?.street?.type === "required" && (
                                        <p className="text-sm mt-1 text-red-500 " role="alert">Street is Required.</p>
                                    )
                                }
                            </label>
                            <label className="">
                                <p className="my-2 font-semibold text-xl">Village</p>
                                <input className="px-2 py-2 w-full border rounded dark:text-black" type="text" placeholder="Enter Village Name"  {...register("village", { required: true, maxLength: 80 })} />
                                {
                                    errors?.village?.type === "required" && (
                                        <p className="text-sm mt-1 text-red-500 " role="alert">Village is Required.</p>
                                    )
                                }
                            </label>
                        </div>
                    </div>
                    <input className="  bg-primary-c text-white cursor-pointer  text-2xl bg-primary-b-c w-full p-2 mt-8 rounded" type="submit" value={"Order Confirm"} />
                </form>


            </div>
        </div>
    );
};

export default Checkout;