import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
interface Props {
    sectionName: string;
}
gsap.registerPlugin(ScrollTrigger);


function SectionHeader({ sectionName }: Props) {
    const headerRef = useRef<HTMLDivElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                borderRef.current,
                { scaleX: 0, opacity: 0 },
                {
                    scaleX: 1,
                    delay: 0.5,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
        return () => ctx.revert();
    }, []);
    return (
        <div ref={headerRef} className="flex flex-col justify-center items-center">
            <h2>{sectionName}</h2>
            <div ref={borderRef} className="border border-b-[.5rem] w-full rounded-b-full" />
        </div>
    )
}

export default SectionHeader