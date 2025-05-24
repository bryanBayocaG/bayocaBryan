import { useEffect, useRef } from "react";
import gsap from "gsap";
function NotFound() {
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(imgRef.current, {
                y: -20,
                duration: 1.5,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            });
        }, imgRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className='flex w-full flex-col justify-center items-center'>
            <img ref={imgRef} src="/notFound.png" className='h-[12rem]' alt="notFound" />
            <p className="whitespace-nowrap text-[2rem]">Sorry, I don't have that ...</p>
        </div>
    )
}

export default NotFound