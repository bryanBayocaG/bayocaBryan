import SectionHeader from "../../SectionHeader"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { LuBicepsFlexed, LuSprout } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
    const border1 = useRef<HTMLDivElement>(null);
    const border2 = useRef<HTMLDivElement>(null);
    const border3 = useRef<HTMLDivElement>(null);
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
        });
        return () => ctx.revert();
    }, [])
    return (
        <section className="flex flex-col justify-center gap-[1rem] p-[2rem] ">
            <SectionHeader sectionName="My Path in Tech" />
            <div className="grid gap-[1rem] md:grid-rows-3 md:grid-col-2 lg:grid-cols-5">
                <div ref={border1} className="flex flex-col p-[.5rem] gap-[.5rem] border-2 boder-neutral-200 md:col-span-2 md:row-span-2 lg:row-span-3 lg:col-span-3 rounded-[.5rem]">
                    <div className="flex justify-center items-center ">
                        <LuBicepsFlexed className="w-[3.5rem] h-[3.5rem]" />
                        <h5>Skills I'm Strengthening</h5>
                    </div>
                    <div className="flex h-full gap-[.5rem]">
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
                <div ref={border2} className="flex justify-center items-center border-2 boder-neutral-200 lg:col-span-2 lg:row-span-2 rounded-[.5rem]">
                    <h5>Web Development </h5>
                </div>
                <div ref={border3} className="flex justify-center items-center border-2 boder-neutral-200 lg:col-span-2 rounded-[.5rem]">
                    <div className="flex items-center justify-center p-[1rem]">
                        <LuSprout className="w-[3.5rem] h-[3.5rem]" />
                        <h5>Curently Learning </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection