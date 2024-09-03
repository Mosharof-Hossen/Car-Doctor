import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={img1}
                    className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=" space-y-7 lg:w-2/3 ml-12">
                        <h3 className="text-white md:text-6xl text-4xl font-bold">Affordable Price For Car Servicing</h3>
                        <p className="text-white text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
                        <button className="px-3 mr-3 py-3 text-white font-semibold bg-primary-c rounded text-xl">Discover More</button>
                        <button className="px-3 py-3 text-white font-semibold rounded text-xl border">Latest Project</button>

                    </div>
                </div>
                <div className="absolute right-10 bottom-10 flex space-x-5 transform justify-between">
                    <a href="#slide6" className="btn btn-circle border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-primary-c text-white border-none">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img
                    src={img2}
                    className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=" space-y-7 lg:w-2/3 ml-12">
                        <h3 className="text-white md:text-6xl text-4xl font-bold">Drive with Confidence</h3>
                        <p className="text-white text-lg">Top-quality tools and services to keep your car running smoothly and safely.</p>
                        <button className="px-3 mr-3 py-3 text-white font-semibold bg-primary-c rounded text-xl">Discover More</button>
                        <button className="px-3 py-3 text-white font-semibold rounded text-xl border">Latest Project</button>

                    </div>
                </div>
                <div className="absolute right-10 bottom-10 flex space-x-5 transform justify-between">
                    <a href="#slide1" className="btn btn-circle border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-primary-c text-white border-none">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img
                    src={img3}
                    className="w-full  rounded-lg" />
                <div className="absolute h-full rounded-lg bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=" space-y-7 lg:w-2/3 ml-12">
                        <h3 className="text-white md:text-6xl text-4xl font-bold">Performance You Can Trust</h3>
                        <p className="text-white text-lg">Upgrade your vehicle with high-performance tools and reliable services that exceed expectations.</p>
                        <button className="px-3 mr-3 py-3 text-white font-semibold bg-primary-c rounded text-xl">Discover More</button>
                        <button className="px-3 py-3 text-white font-semibold rounded text-xl border">Latest Project</button>

                    </div>
                </div>
                <div className="absolute right-10 bottom-10 flex space-x-5 transform justify-between">
                    <a href="#slide2" className="btn btn-circle border-none">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-primary-c text-white border-none">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img
                    src={img4}
                    className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=" space-y-7 lg:w-2/3 ml-12">
                        <h3 className="text-white md:text-6xl text-4xl font-bold">Tools for Every Job</h3>
                        <p className="text-white text-lg">From DIY repairs to professional maintenance, we offer the tools you need for any task.</p>
                        <button className="px-3 mr-3 py-3 text-white font-semibold bg-primary-c rounded text-xl">Discover More</button>
                        <button className="px-3 py-3 text-white font-semibold rounded text-xl border">Latest Project</button>

                    </div>
                </div>
                <div className="absolute right-10 bottom-10 flex space-x-5 transform justify-between">
                    <a href="#slide3" className="btn btn-circle border-none">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-primary-c text-white border-none">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full ">
                <img
                    src={img5}
                    className="w-full rounded-lg" />
                <div className="absolute rounded-lg h-full bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=" space-y-7 lg:w-2/3 ml-12">
                        <h3 className="text-white md:text-6xl text-4xl font-bold">Revitalize Your Ride</h3>
                        <p className="text-white text-lg">Enhance your driving experience with top-notch services and the latest car tools on the market.</p>
                        <button className="px-3 mr-3 py-3 text-white font-semibold bg-primary-c rounded text-xl">Discover More</button>
                        <button className="px-3 py-3 text-white font-semibold rounded text-xl border">Latest Project</button>

                    </div>
                </div>
                <div className="absolute right-10 bottom-10 flex space-x-5 transform justify-between">
                    <a href="#slide4" className="btn btn-circle border-none">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-primary-c text-white border-none">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full ">
                <img
                    src={img6}
                    className="w-full rounded-lg" />
                <div className="absolute rounded-lg h-full bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=" space-y-7 lg:w-2/3 ml-12">
                        <h3 className="text-white md:text-6xl text-4xl font-bold">Expert Care, Anytime</h3>
                        <p className="text-white text-lg">Count on us for 24/7 car services and a wide range of essential automotive tools.</p>
                        <button className="px-3 mr-3 py-3 text-white font-semibold bg-primary-c rounded text-xl">Discover More</button>
                        <button className="px-3 py-3 text-white font-semibold rounded text-xl border">Latest Project</button>

                    </div>
                </div>
                <div className="absolute right-10 bottom-10 flex space-x-5 transform justify-between">
                    <a href="#slide5" className="btn btn-circle border-none">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-primary-c text-white border-none">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;