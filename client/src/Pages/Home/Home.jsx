import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
    return (
        <div className="p-5 space-y-10">
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;