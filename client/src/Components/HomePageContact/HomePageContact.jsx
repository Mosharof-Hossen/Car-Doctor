import { FcCallback, FcOvertime, FcSearch } from "react-icons/fc";

const HomePageContact = () => {
    return (
        <div className="bg-[#151515] rounded-lg p-16 space-y-5 grid grid-cols-1 lg:grid-cols-3 text-white my-14">
            <div className="flex items-center gap-3">
                <FcOvertime className="text-4xl"/>
                <div>
                    <p className="text-sm font-semibold">We are open monday-friday</p>
                    <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FcCallback className="text-4xl"/>
                <div>
                    <p className="text-sm font-semibold">Have a question?</p>
                    <p className="text-xl font-bold">+2546 251 2658</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FcSearch className="text-4xl"/>
                <div>
                    <p className="text-sm font-semibold">Need a repair? Our address.</p>
                    <p className="text-xl font-bold"> Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageContact;