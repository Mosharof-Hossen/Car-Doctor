import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './TeamMember.css';

import member1 from "../../assets/images/team/1.jpg"
import member2 from "../../assets/images/team/2.jpg"
import member3 from "../../assets/images/team/3.jpg"
import member4 from "../../assets/images/team/1.jpg"
import member5 from "../../assets/images/team/2.jpg"
import member6 from "../../assets/images/team/3.jpg"

import facebook from "../../assets/socialIcon/facebook.png"
import linkedIn from "../../assets/socialIcon/linkedin.png"
import twitter from "../../assets/socialIcon/twitter.png"
import insta from "../../assets/socialIcon/instagram.png"
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const TeamMember = () => {
    return (
        <div>
            <div className="text-center space-y-5 mb-10">
                <p className="text-xl text-primary-c font-bold mt-10">Team</p>
                <h3 className="text-4xl font-bold">Meet Our Team</h3>
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card bg-base-100 rounded border">
                        <figure className="px-5 pt-5">
                            <img
                                src={member1}
                                alt="teamMemberImage"
                                className="rounded main-image" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">Sarah Thompson</h2>
                            <p className='text-gray-500'>Lead Mechanic</p>
                            <div className="card-actions space-y-3 flex items-baseline">
                                <img className='w-8 rounded-full ' src={facebook} alt="" />
                                <img className='w-8 rounded-full ' src={twitter} alt="" />
                                <img className='w-8 rounded-full ' src={linkedIn} alt="" />
                                <img className='w-8 rounded-full ' src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 rounded border">
                        <figure className="px-5 pt-5">
                            <img
                                src={member2}
                                alt="teamMemberImage"
                                className="rounded main-image" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">David Martinez</h2>
                            <p className='text-gray-500'>Sales Manager</p>
                            <div className="card-actions space-y-3 flex items-baseline">
                                <img className='w-8 rounded-full ' src={facebook} alt="" />
                                <img className='w-8 rounded-full ' src={twitter} alt="" />
                                <img className='w-8 rounded-full ' src={linkedIn} alt="" />
                                <img className='w-8 rounded-full ' src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 rounded border">
                        <figure className="px-5 pt-5">
                            <img
                                src={member3}
                                alt="teamMemberImage"
                                className="rounded main-image" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">Emily Rogers</h2>
                            <p className='text-gray-500'>Customer Support Specialist</p>
                            <div className="card-actions space-y-3 flex items-baseline">
                                <img className='w-8 rounded-full ' src={facebook} alt="" />
                                <img className='w-8 rounded-full ' src={twitter} alt="" />
                                <img className='w-8 rounded-full ' src={linkedIn} alt="" />
                                <img className='w-8 rounded-full ' src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 rounded border">
                        <figure className="px-5 pt-5">
                            <img
                                src={member4}
                                alt="teamMemberImage"
                                className="rounded main-image" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">Michael Hayes</h2>
                            <p className='text-gray-500'>Automotive Tools Specialist</p>
                            <div className="card-actions space-y-3 flex items-baseline">
                                <img className='w-8 rounded-full ' src={facebook} alt="" />
                                <img className='w-8 rounded-full ' src={twitter} alt="" />
                                <img className='w-8 rounded-full ' src={linkedIn} alt="" />
                                <img className='w-8 rounded-full ' src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 rounded border">
                        <figure className="px-5 pt-5">
                            <img
                                src={member5}
                                alt="teamMemberImage"
                                className="rounded main-image" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">Jessica Lee</h2>
                            <p className='text-gray-500'>Marketing Coordinator</p>
                            <div className="card-actions space-y-3 flex items-baseline">
                                <img className='w-8 rounded-full ' src={facebook} alt="" />
                                <img className='w-8 rounded-full ' src={twitter} alt="" />
                                <img className='w-8 rounded-full ' src={linkedIn} alt="" />
                                <img className='w-8 rounded-full ' src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 rounded border">
                        <figure className="px-5 pt-5">
                            <img
                                src={member6}
                                alt="teamMemberImage"
                                className="rounded main-image" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">Robert Clark</h2>
                            <p className='text-gray-500'>Service Advisor</p>
                            <div className="card-actions space-y-3 flex items-baseline">
                                <img className='w-8 rounded-full ' src={facebook} alt="" />
                                <img className='w-8 rounded-full ' src={twitter} alt="" />
                                <img className='w-8 rounded-full ' src={linkedIn} alt="" />
                                <img className='w-8 rounded-full ' src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default TeamMember;