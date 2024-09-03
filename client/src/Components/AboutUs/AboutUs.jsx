import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="hero  lg:h-[480px] h-fit">
            <div className="hero-content flex-col lg:flex-row">
                <div className="relative lg:w-1/2 w-full">
                    <img src={person} className=" w-full rounded-lg  " />
                    <img src={parts} className="invisible lg:visible top-1/2 border-8 border-white w-1/2 aspect-square right-0 rounded-lg absolute" />
                </div>
                <div className="lg:w-1/2 lg:pl-10 space-y-1">
                    <p className="text-primary-c font-bold">About Us</p>
                    <h1 className="text-4xl font-bold">Passion for Cars, Commitment to Quality</h1>
                    <p className="py-6 text-gray-500 text-base text-justify">
                    At Car Doctor, we’re dedicated to providing top-tier automotive services and premium tools to car enthusiasts and professionals alike. With years of experience in the industry, our team combines expertise and passion to ensure every vehicle we touch performs at its best. <br /><br /> Whether you’re seeking maintenance services or the latest in car tools, we’re here to offer reliable solutions that keep you moving forward. Trust us to care for your car as if it were our own.
                    </p>
                    <button className="px-3 py-2 bg-primary-c text-white rounded text-xl">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;