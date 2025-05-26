import SectionHeader from "../../SectionHeader"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { certificates } from '../../../data/data'
import './style.css'

import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

function MyPathSection() {

    const border1 = useRef<HTMLDivElement>(null);
    const border2 = useRef<HTMLDivElement>(null);
    const border3 = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                border1.current,
                { scaleX: 0, opacity: 0, transformOrigin: "left center" },
                {
                    scaleX: 1,
                    delay: 0.5,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: border1.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                border2.current,
                { scaleY: 0, opacity: 0, transformOrigin: "top center" },
                {
                    scaleY: 1,
                    delay: 0.5,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: border1.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                border3.current,
                { scaleX: 0, opacity: 0, transformOrigin: "right center" },
                {
                    scaleX: 1,
                    delay: 0.5,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: border1.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [])
    return (
        <section
            id="my_path"
            className="flex flex-col justify-center gap-[1rem] p-[2rem] ">
            <SectionHeader sectionName="My Path in Tech" />
            <div ref={containerRef} className="grid gap-[1rem] md:grid-rows-3 md:grid-col-2 lg:grid-cols-5">
                <div ref={border1} className="relative grid grid-cols-5 md:grid-cols-7 p-[.5rem] gap-[.5rem] border-2 border-neutral-200 shadow-md dark:border-white/[0.2] shadow-xl md:col-span-2 md:row-span-2 lg:row-span-3 lg:col-span-3 rounded-[.5rem]">
                    <div className="flex flex-col col-span-2 justify-start">
                        <div className="my-auto p-[.5rem]">
                            <p>I love to learn new and earn</p>
                            <p className="text-[2rem] font-extrabold">My Certificates</p>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-5 h-full  gap-[.5rem]">
                        <Swiper
                            grabCursor={true}
                            effect={'creative'}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}

                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay, Pagination]}
                            className="mySwiper w-full h-full"
                        >
                            {certificates.map((cert, i) => (
                                <SwiperSlide key={i} className="w-full h-full ">
                                    <a href={cert.link} target="_blank" className="h-full w-full flex justify-center items-center bg-white/30">
                                        <img src={cert.imgUrl} className="object-contain" alt={cert.name} />
                                    </a>
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div ref={border2} className="grid grid-cols-5 md:grid-cols-7 border-2 border-neutral-200 dark:border-white/[0.2] shadow-md lg:col-span-2 lg:row-span-2 rounded-[1rem] overflow-hidden">
                    <div className="flex flex-col col-span-2 justify-start">
                        <div className="my-auto p-[.5rem]">
                            <p>I constantly improve</p>
                            <p className="text-[2rem] font-extrabold">My Insights</p>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-5 grid grid-cols-2 grid-rows-2 flex-1 h-full gap-[.5rem]">
                        <div className="flex flex-col justify-center items-center bg-gray-200 dark:bg-white/20 backdrop-blur-[5rem] gap-[.5rem] p-[.5rem]">
                            <FaGithub className="w-[3rem] h-[3rem]" />
                            <p className="text-center">Version Control: Git & GitHub</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 dark:bg-white/20 backdrop-blur-[5rem] gap-[.5rem] p-[.5rem]">
                            <TbApi className="w-[3rem] h-[3rem]" />
                            <p className="text-center">APIs: RESTful APIs, integration, error handling,</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 dark:bg-white/20 backdrop-blur-[5rem] gap-[.5rem] p-[.5rem]">
                            <MdOutlineSecurity className="w-[3rem] h-[3rem]" />
                            <p className="text-center">Authentication: JWT, OAuth basics, cookie vs. token-based auth,</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 dark:bg-white/20 backdrop-blur-[5rem] gap-[.5rem] p-[.5rem]">
                            <GrOptimize className="w-[3rem] h-[3rem]" />
                            <p className="text-center">SEO: Basic optimization and meta tags.</p>
                        </div>
                    </div>
                </div>
                <div ref={border3} className="flex justify-center items-center border-2 border-neutral-200 dark:border-white/[0.2] shadow-md lg:col-span-2 rounded-[.5rem]">
                    <div className="flex flex-col items-center justify-center p-[1rem]">
                        <h5>Curently Learning </h5>
                        <p className="text-center text-[1.5rem]">C#, ASP.NET Core</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyPathSection