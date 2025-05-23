import gsap from 'gsap'
import { useEffect, useRef } from 'react';

function HeroSection() {
    const nonColorMeRef = useRef<HTMLDivElement | null>(null);
    const coloredMeRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(nonColorMeRef.current, { y: 300, opacity: 0 }, {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
            });
            gsap.fromTo(coloredMeRef.current, { y: -100, opacity: 0 }, {
                y: 0,

                opacity: 1,
                duration: 2,
                ease: "power2.out",
            });
        }, nonColorMeRef);

        return () => ctx.revert();
    }, []);
    return (
        <section
            id="home"
            className="hero-path relative h-[95vh] bg-[url(/polygonialBGW.svg)] dark:bg-[url(/polygonialBG.svg)] bg-center bg-size-[300%] md:bg-size-[200%] bg-no-repeat bg-[#f7f7f7] dark:bg-[#0f172a]">
            <div className="absolute flex  flex-col md:flex-row items-center justify-between w-full h-full ">
                <div className="w-full h-full  relative">
                    <div ref={nonColorMeRef} className="absolute right-0 bottom-[4.5rem] md:bottom-none md:top-[15rem] h-[50rem] lg:top-2 lg:h-[55rem]">
                        <img src="/bryanLeft.png" className=" w-full h-full" alt="bryan photo" />
                    </div>
                    <p>Part coder</p>
                </div>
                <div className="hidden md:block w-full h-full  relative">
                    <div ref={coloredMeRef} className="absolute left-0 top-[15rem]  h-[50rem]  lg:top-2 lg:h-[55rem]">
                        <img src="/bryanRight.png" className=" w-full h-full" alt="bryan photo" />
                    </div>
                    <p>Part coder</p>
                </div>
            </div>

        </section>

    )
}

export default HeroSection