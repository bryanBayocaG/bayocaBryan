import { useEffect, useRef } from "react";
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import gsap from 'gsap'
gsap.registerPlugin(ScrambleTextPlugin);
function IdoCoding() {
    const textBlockRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            const pTags = textBlockRef.current?.querySelectorAll('p');
            if (pTags) {
                gsap.set(pTags, { opacity: 0, x: -100 });
            }

            tl.add(() => {
                const pTags = textBlockRef.current?.querySelectorAll('p');
                pTags?.forEach((p) => {
                    gsap.to(p, {
                        x: 0,
                        opacity: 1,
                        color: '#00FF00',
                        duration: 1.2,
                        scrambleText: {
                            text: p.textContent ?? '',
                            chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                            speed: 2,
                            revealDelay: 0.2,
                        },
                        ease: 'none',
                        onComplete: () => {
                            gsap.to(p, { color: '', duration: 0.3 });
                        },
                    });
                });
            }, 0);

        }, textBlockRef);
        return () => ctx.revert();
    }, []);
    return (
        <div
            ref={textBlockRef}
            className='mt-[30%] flex flex-col justify-center items-center w-fit mx-auto md:mx-0 md:mr-auto relative p-[1rem]'>
            <div className='absolute left-[6rem] top-7'>
                <p className='text-[1.5rem] font-bold'>I do</p>
            </div>
            <p className='text-[5rem] font-extrabold'>&lt;coding&gt;</p>
            <p className='w-[20rem] text-justify'>I am a full-stack developer, proficient in PHP and JavaScript, building full-stack applications that are both functional and visually polished.</p>
        </div>
    )
}

export default IdoCoding