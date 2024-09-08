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
                loader: async ({ params }) => await fetch(`http://localhost:3000/service-details/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/Checkout",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            }

        ]
    }
])

export default router;