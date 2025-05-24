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
                    <div ref={nonColorMeRef} className="absolute right-0 bottom-[4.5rem] md:bottom-none md:top-[15rem] h-[50rem] lg:top-2 lg:h-[55rem] ">
                        <img src="/bryanLeftWEBP.webp" className="pointer-events-none w-full h-full" alt="bryan photo" draggable={false} />
                        {/* <img src="/bryanLeft.png" className="pointer-events-none w-full h-full" alt="bryan photo" draggable={false} /> */}
                    </div>
                    <div className='mt-[30%] flex flex-col justify-center items-center w-fit mx-auto md:mx-0 md:mr-auto relative p-[1rem]'>
                        <div className='absolute left-[5rem] top-7'>
                            <p className='text-[1.5rem] font-bold'>I do</p>
                        </div>
                        <p className='text-[5rem] font-extrabold'>&lt;coding&gt;</p>
                    </div>
                    <div className='-mt-[2rem] w-[20rem] flex flex-col justify-center items-center mx-auto md:mx-0 md:mr-auto relative p-[1rem]'>
                        <p className='text-justify'>I am a full-stack developer, I'm proficient in PHP and JavaScript, building full-stack applications that are both functional and visually polished.</p>
                    </div>
                </div>
                <div className="hidden md:block w-full h-full  relative">
                    <div ref={coloredMeRef} className="absolute left-0 top-[15rem]  h-[50rem]  lg:top-2 lg:h-[55rem] ">
                        <img src="/bryanRightWEBP.webp" className="pointer-events-none w-full h-full" alt="bryan photo" draggable={false} />
                        {/* <img src="/bryanRight.png" className="pointer-events-none w-full h-full" alt="bryan photo" draggable={false} /> */}
                    </div>
                    <div className=' mt-[30%] flex flex-col justify-end items-center w-fit ml-auto relative p-[1rem]'>
                        <div className='absolute left-[5rem] top-7'>
                            <p className='text-[1.5rem] font-bold'>I do</p>
                        </div>
                        <p className='text-[5rem] font-bold'>design</p>
                    </div>
                    <div className='flex -mt-[2rem] w-[20rem] flex-col justify-end items-center ml-auto relative p-[1rem] bg-white/30'>
                        <p className='text-justify'>I create my own image assets and logos from scratch. I'm highly proficient with Photoshop and Illustrator, bringing concepts to life with creativity.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection