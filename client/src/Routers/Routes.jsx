import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Services from "../Components/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Order from "../Pages/Order/Order";
import ManageInventory from "../Pages/ManageInventory/ManageInventory";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/serviceDetails/:id",
                loader: async ({ params }) => await fetch(`https://car-doctor-server-rosy-xi.vercel.app/service-details/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/checkout/:id",
                loader: async ({ params }) => await fetch(`https://car-doctor-server-rosy-xi.vercel.app/service-details/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: "/order",
                element: <PrivateRoute><Order></Order></PrivateRoute>
            }
            ,
            {
                path: "/manage-inventory",
                element: <AdminRoute><ManageInventory></ManageInventory></AdminRoute>,
            }

        ]
    }
])

export default router;