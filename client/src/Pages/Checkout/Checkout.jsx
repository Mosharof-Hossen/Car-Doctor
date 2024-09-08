import { useLoaderData,  } from "react-router-dom";


const Checkout = () => {

    const loaderData = useLoaderData()
    console.log(loaderData);
    return (
        <div>
            Checkout
        </div>
    );
};

export default Checkout;