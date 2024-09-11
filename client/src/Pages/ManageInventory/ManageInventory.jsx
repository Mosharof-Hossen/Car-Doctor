import { useLoaderData } from "react-router-dom";
import inventoryBanner from "../../assets/images/checkout/checkout.png"
import ManageTableRow from "./ManageTableRow";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageInventory = () => {
    const loaderData = useLoaderData()
    const [bookings, setBookings] = useState(loaderData);

    const handleStatusChange = (event, id) => {
        const selectedStatus = event.target.value;

        const data = { id, selectedStatus }
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status has been updated",
                        showConfirmButton: false,
                        timer: 1000
                    });

                }
            })
    }
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
                                text: "Your item has been deleted.",
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
                    backgroundImage: `url(${inventoryBanner})`,
                }}>
                <div className="hero-overlay bg-opacity-70 "></div>
                <div className="hero-content text-neutral-content text-center ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Manage All Orders</h1>

                        <button
                            disabled
                            style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 trapezium bg-primary-c text-white font-bold py-3 px-8 hover:bg-blue-700 transition duration-300">
                            Home/Manage All Orders
                        </button>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto mt-16">
                <table className="table">
                    {/* head */}
                    <thead className="font-bold text-2xl text-black">
                        <tr >
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
                            bookings?.map(item => <ManageTableRow item={item} key={item._id} handleDelete={handleDelete} handleStateChange={handleStatusChange} ></ManageTableRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageInventory;