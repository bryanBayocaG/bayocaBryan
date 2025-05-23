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
                <div ref={border1} className="flex justify-center items-center border-2 boder-neutral-200 md:col-span-2 md:row-span-2 lg:row-span-3 lg:col-span-3 rounded-[.5rem]">01</div>
                <div ref={border2} className="flex justify-center items-center border-2 boder-neutral-200 lg:col-span-2 lg:row-span-2 rounded-[.5rem]">02</div>
                <div ref={border3} className="flex justify-center items-center border-2 boder-neutral-200 lg:col-span-2 rounded-[.5rem]">03</div>
            </div>
        </section>
    )
}

export default AboutSection