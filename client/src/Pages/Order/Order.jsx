import { useContext, useEffect, useState } from "react";
import orderBanner from "../../assets/images/checkout/checkout.png"
import { AuthContext } from "../../Providers/AuthProvider";
const Order = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/bookings/${user.uid}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.uid])
    console.log(bookings);
    return (
        <div className="p-5">
            <div
                className="relative hero h-[300px] bg-cover bg-center bg-no-repeat "
                style={{
                    backgroundImage: `url(${orderBanner})`,
                }}>
                <div className="hero-overlay bg-opacity-70 "></div>
                <div className="hero-content text-neutral-content text-center ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Cart Details</h1>

                        <button
                            disabled
                            style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 trapezium bg-primary-c text-white font-bold py-3 px-8 hover:bg-blue-700 transition duration-300">
                            Home/Cart
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Order;