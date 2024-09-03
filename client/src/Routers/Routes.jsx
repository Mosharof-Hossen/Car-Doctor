import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Services from "../Components/Services/Services";

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
            }
        ]
    }
])

export default router;