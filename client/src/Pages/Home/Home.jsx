import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import HomePageContact from "../../Components/HomePageContact/HomePageContact";
import Services from "../../Components/Services/Services";
import TeamMember from "../../Components/TeamMember/TeamMember";

const Home = () => {
    return (
        <div className="p-5 ">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <HomePageContact></HomePageContact>
            <TeamMember></TeamMember>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;