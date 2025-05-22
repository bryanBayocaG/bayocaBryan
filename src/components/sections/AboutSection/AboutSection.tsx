import SectionHeader from "../../SectionHeader"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
    const border1 = useRef<HTMLDivElement>(null);
    const border2 = useRef<HTMLDivElement>(null);
    const border3 = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                border1.current,
                { x: -50, opacity: 0 },
                {
                    x: 1,
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
                { y: -50, opacity: 0 },
                {
                    y: 1,
                    delay: 1,
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
                { x: 50, opacity: 0 },
                {
                    x: 1,
                    delay: 1.5,
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
            <div className="flex flex-col md:flex-row gap-[1rem] h-full ">
                <div className="flex-1 ">
                    <div ref={border1} className=" h-full p-[1rem] border-2 rounded-[1rem] border-neutral-200 shadow-md">01</div>
                </div>
                <div className="flex-1 flex flex-col gap-[1rem]">
                    <div ref={border2} className=" flex-1 h-full p-[1rem] border-2 rounded-[1rem] border-neutral-200 shadow-md">02</div>
                    <div ref={border3} className=" flex-2 h-full p-[1rem] border-2 rounded-[1rem] border-neutral-200 shadow-md">03</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection