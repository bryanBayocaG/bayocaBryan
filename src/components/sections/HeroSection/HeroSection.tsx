import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import IdoCoding from './IdoCoding/IdoCoding';
import IdoDesign from './IdoDesign/IdoDesign';
import { useLoadStore } from '../../../store';

function HeroSection() {
    const nonColorMeRef = useRef<HTMLDivElement | null>(null);
    const coloredMeRef = useRef<HTMLDivElement | null>(null);
    const noColoredMeBG = useRef<HTMLDivElement | null>(null);
    const { setLoading, setNotLoading } = useLoadStore();
    useEffect(() => {
        const images = Array.from(document.querySelectorAll('img'));
        let loadedCount = 0;
        setLoading();
        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                setNotLoading()
                const ctx = gsap.context(() => {
                    const tl = gsap.timeline();
                    tl.fromTo([nonColorMeRef.current, noColoredMeBG.current], { y: 300 }, {
                        y: 0,
                        duration: 2,
                        ease: "power2.out",
                    }, 0);
                    tl.fromTo(coloredMeRef.current, { y: -100 }, {
                        y: 0,
                        duration: 2,
                        ease: "power2.out",
                    }, 0);
                }, nonColorMeRef);

                return () => ctx.revert();
            }
        };

        images.forEach(img => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
            }
        });

        return () => {
            images.forEach(img => {
                img.removeEventListener('load', handleImageLoad);
            });
        };
    }, []);
    return (
        <section
            id="home"
            className="hero-path relative h-[95vh] bg-[url(/polygonialBGW.svg)] dark:bg-[url(/polygonialBG.svg)] bg-center bg-size-[300%] md:bg-size-[200%] bg-no-repeat bg-[#f7f7f7] dark:bg-[#0f172a]">
            <div className="absolute flex  flex-col md:flex-row items-center justify-between w-full h-full ">
                <div className="w-full h-full overflow-hidden relative">
                    <div ref={nonColorMeRef} className="absolute right-0 bottom-[4.5rem] md:bottom-none md:top-[15rem] h-[50rem] lg:top-2 lg:h-[55rem] ">
                        <img src="/bryanLeft.webp" className="pointer-events-none w-full h-full" alt="bryan photo" draggable={false} />
                    </div>
                    <div ref={noColoredMeBG} className="absolute right-[3.5rem] bottom-[15rem] w-[45rem] rotate-[-35deg] md:right-[5.5rem] md:w-[35rem] md:bottom-[12.5rem] lg:bottom-[12rem] lg:right-[6rem] lg:w-[45rem] -z-10">
                        <img src="/jsPHPtext.webp" className="pointer-events-none" alt="bgText" draggable={false} />
                    </div>
                    <IdoCoding />
                </div>
                <div className="hidden md:block w-full h-full  relative">
                    <div ref={coloredMeRef} className="absolute left-0 top-[15rem]  h-[50rem]  lg:top-2 lg:h-[55rem] ">
                        <img src="/bryanRight.webp" className=" pointer-events-none w-full h-full" alt="bryan photo" draggable={false} />
                    </div>
                    <IdoDesign />
                </div>
            </div>
        </section>

    )
}

export default HeroSection