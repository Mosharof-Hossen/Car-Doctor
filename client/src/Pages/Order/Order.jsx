import { useContext, useEffect, useState } from "react";
import orderBanner from "../../assets/images/checkout/checkout.png"
import { AuthContext } from "../../Providers/AuthProvider";
import TableRow from "./TableRow";
import Swal from "sweetalert2";
const Order = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/bookings/${user.uid}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.uid])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remaining = bookings.filter(item => item._id != id);
                            setBookings(remaining)
                        }
                    })


            }
        });


    }
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
            {/* Table */}
            <div className="overflow-x-auto mt-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete ?
                            </th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map(item => <TableRow item={item} key={item._id} handleDelete={handleDelete}></TableRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Order;