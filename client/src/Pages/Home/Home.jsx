import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div className="p-5 ">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;