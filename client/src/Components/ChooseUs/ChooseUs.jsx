import group from "../../assets/icons/group.svg"
import check from "../../assets/icons/check.svg"
import person from "../../assets/icons/person.svg"
import wrench from "../../assets/icons/Wrench.svg"
import delivery from "../../assets/icons/deliveryt.svg"
import { FaClock } from "react-icons/fa6";

const ChooseUs = () => {
    return (
        <div className="mt-14 space-y-8">
            <div className="text-center space-y-5">
                <p className="text-xl text-primary-c font-bold mt-10">Core Features</p>
                <h3 className="text-4xl font-bold">Why Choose Us</h3>
                <p className="text-base md:w-2/3 mx-auto text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-6 gap-5">
                <div className="text-center space-y-3 border rounded p-5 hover:bg-primary-c hover:text-white">
                    <img src={group} alt="" className="mx-auto" />
                    <p className="font-bold">Expert Team</p>
                </div>
                <div className="text-center space-y-3 border rounded p-5  hover:bg-primary-c hover:text-white">
                    <FaClock className="mx-auto text-6xl"></FaClock>
                    <p className="font-bold">Timely Delivery</p>
                </div>
                <div className="text-center space-y-3 border rounded p-5  hover:bg-primary-c hover:text-white">
                    <img src={person} alt="" className="mx-auto" />
                    <p className="font-bold">24/7 Support</p>
                </div>
                <div className="text-center space-y-3 border rounded p-5  hover:bg-primary-c hover:text-white">
                    <img src={wrench} alt="" className="mx-auto" />
                    <p className="font-bold">Best Equipment</p>
                </div>
                <div className="text-center space-y-3 border rounded p-5  hover:bg-primary-c hover:text-white">
                    <img src={check} alt="" className="mx-auto" />
                    <p className="font-bold">100% Guaranty</p>
                </div>
                <div className="text-center space-y-3 border rounded p-5  hover:bg-primary-c hover:text-white">
                    <img src={delivery} alt="" className="mx-auto" />
                    <p className="font-bold">Expert Team</p>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;