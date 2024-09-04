import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Review.css';
import quote from "../../assets/icons/quote.svg"

import person1 from "../../assets/User-Icon/member1.png"
import person2 from "../../assets/User-Icon/member2.png"
import person3 from "../../assets/User-Icon/member3.png"
import person4 from "../../assets/User-Icon/member1.png"
import person5 from "../../assets/User-Icon/member2.png"
import person6 from "../../assets/User-Icon/member3.png"

import { FreeMode, Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div>
            <div className="text-center space-y-5 mb-10">
                <p className="text-xl text-primary-c font-bold mt-10">Testimonial</p>
                <h3 className="text-4xl font-bold">What Customer Says</h3>
                <p className="text-base md:w-2/3 mx-auto text-gray-500 ">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>
            <Swiper
                breakpoints={{
                    // When the window width is >= 640px (sm)
                    640: {
                        slidesPerView: 1,
                    },
                    // When the window width is >= 768px (md)
                    768: {
                        slidesPerView: 2,
                    },
                    // When the window width is >= 1024px (lg)
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className=""
            >
                <SwiperSlide>
                    <div className='w-full border-2 p-5 rounded'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={person1} className='w-10 h-10' alt="" />
                                <div className='text-left'>
                                    <p className='text-xl font-bold'>Awlad Hossian</p>
                                    <p className='text-sm font-semibold'>Businessman</p>
                                </div>
                            </div>

                            <div className=''>
                                <img src={quote} alt="" className='w-14 opacity-20' />
                            </div>
                        </div>
                        <div>
                            <p className='text-justify text-sm text-gray-500 mt-3'>The service here is top-notch! The team is , and the tools I purchased have significantly improved our work efficiency. I highly recommend them to anyone in the industry.</p>
                            <div className="rating flex mt-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full border-2 p-5 rounded'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={person2} className='w-10 h-10' alt="" />
                                <div className='text-left'>
                                    <p className='text-xl font-bold'>Lisa Carter</p>
                                    <p className='text-sm font-semibold'>Graphic Designer</p>
                                </div>
                            </div>

                            <div className=''>
                                <img src={quote} alt="" className='w-14 opacity-20' />
                            </div>
                        </div>
                        <div>
                            <p className='text-justify text-sm text-gray-500 mt-3'>I was impressed by their professionalism and attention to detail. They quickly diagnosed the issue with my car, and the repair tools I bought were exactly what I needed.</p>
                            <div className="rating flex mt-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full border-2 p-5 rounded'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={person3} className='w-10 h-10' alt="" />
                                <div className='text-left'>
                                    <p className='text-xl font-bold'>Mark Davis</p>
                                    <p className='text-sm font-semibold'>Fleet Manager</p>
                                </div>
                            </div>

                            <div className=''>
                                <img src={quote} alt="" className='w-14 opacity-20' />
                            </div>
                        </div>
                        <div>
                            <p className='text-justify text-sm text-gray-500 mt-3'> Excellent service and a wide selection of quality tools! The team went above and beyond to ensure our vehicles were serviced on time. Highly reliable and trustworthy.</p>
                            <div className="rating flex mt-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full border-2 p-5 rounded'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={person4} className='w-10 h-10' alt="" />
                                <div className='text-left'>
                                    <p className='text-xl font-bold'>Emily Johnson</p>
                                    <p className='text-sm font-semibold'>Real Estate Agent</p>
                                </div>
                            </div>

                            <div className=''>
                                <img src={quote} alt="" className='w-14 opacity-20' />
                            </div>
                        </div>
                        <div>
                            <p className='text-justify text-sm text-gray-500 mt-3'>The customer service was outstanding! They helped me choose the perfect tools for my car, and the maintenance service was quick and efficient. I’m extremely satisfied with the experience.</p>
                            <div className="rating flex mt-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full border-2 p-5 rounded'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={person5} className='w-10 h-10' alt="" />
                                <div className='text-left'>
                                    <p className='text-xl font-bold'>Kevin Brown</p>
                                    <p className='text-sm font-semibold'>Software Engineer</p>
                                </div>
                            </div>

                            <div className=''>
                                <img src={quote} alt="" className='w-14 opacity-20' />
                            </div>
                        </div>
                        <div>
                            <p className='text-justify text-sm text-gray-500 mt-3'> I had a great experience here! The staff was friendly and offered expert advice on car tools and maintenance. My car runs better than ever. Highly recommend their services.</p>
                            <div className="rating flex mt-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full border-2 p-5 rounded'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={person6} className='w-10 h-10' alt="" />
                                <div className='text-left'>
                                    <p className='text-xl font-bold'>Rachel Adams</p>
                                    <p className='text-sm font-semibold'>Restaurant Owner</p>
                                </div>
                            </div>

                            <div className=''>
                                <img src={quote} alt="" className='w-14 opacity-20' />
                            </div>
                        </div>
                        <div>
                            <p className='text-justify text-sm text-gray-500 mt-3'>Fantastic service from start to finish! The team provided excellent recommendations for tools, and the repairs were done quickly. I appreciate to quality and customer satisfaction.</p>
                            <div className="rating flex mt-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Review;