import gsap from 'gsap'
import { useEffect, useRef } from 'react';

function HeroSection() {
    const nonColorMeRef = useRef<HTMLDivElement | null>(null);
    const coloredMeRef = useRef<HTMLDivElement | null>(null);
    const noColoredMeBG = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([nonColorMeRef.current, noColoredMeBG.current], { y: 300 }, {
                y: 0,
                duration: 2,
                ease: "power2.out",
            });
            gsap.fromTo(coloredMeRef.current, { y: -100 }, {
                y: 0,
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
                    <div ref={nonColorMeRef} className="absolute right-0 bottom-[4.5rem] md:bottom-none md:top-[15rem] h-[50rem] lg:top-2 lg:h-[55rem] ">
                        <img src="/bryanLeft.webp" className="pointer-events-none w-full h-full" alt="bryan photo" draggable={false} />
                    </div>
                    <div ref={noColoredMeBG} className="absolute right-[3.5rem] bottom-[15rem] w-[45rem] rotate-[-35deg] md:right-[5.5rem] md:w-[35rem] md:bottom-[12.5rem] lg:bottom-[15rem] lg:right-[2.5rem] lg:w-[45rem] -z-10">
                        <img src="/jsPHPtext.webp" className="pointer-events-none" alt="bgText" draggable={false} />
                    </div>
                    <div className='mt-[30%] flex flex-col justify-center items-center w-fit mx-auto md:mx-0 md:mr-auto relative p-[1rem]'>
                        <div className='absolute left-[6rem] top-7'>
                            <p className='text-[1.5rem] font-bold'>I do</p>
                        </div>
                        <p className='text-[5rem] font-extrabold'>&lt;coding&gt;</p>
                        <p className='w-[20rem] text-justify'>I am a full-stack developer, I'm proficient in PHP and JavaScript, building full-stack applications that are both functional and visually polished.</p>
                    </div>
                </div>
                <div className="hidden md:block w-full h-full  relative">
                    <div ref={coloredMeRef} className="absolute left-0 top-[15rem]  h-[50rem]  lg:top-2 lg:h-[55rem] ">
                        <img src="/bryanRight.webp" className=" pointer-events-none w-full h-full" alt="bryan photo" draggable={false} />
                    </div>
                    <div className='mt-[30%] flex flex-col justify-end items-center w-fit ml-auto relative p-[1rem] bg-center bg-cover'>
                        <div className='absolute left-[8.5rem] top-7'>
                            <p className='text-[1.5rem] font-bold'>I do</p>
                        </div>
                        <p className='text-[5rem] font-bold '>~design~</p>
                        <p className='w-[20rem] text-justify p-[.5rem]'>I create my own image assets and logos from scratch. I'm highly proficient with Photoshop and Illustrator, bringing concepts to life with creativity.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection