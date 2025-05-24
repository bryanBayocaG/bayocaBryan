import { useEffect, useRef } from "react"
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
function IdoDesign() {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const textRef1 = useRef<HTMLParagraphElement | null>(null);
    const textRef2 = useRef<HTMLParagraphElement | null>(null);
    useEffect(() => {
        document.fonts.ready.then(() => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline();
                const charH = textRef.current?.offsetHeight ?? 0;

                const mySplitText = new SplitText(textRef.current, {
                    type: 'chars',
                    charsClass: 'char',
                    position: 'relative'
                });
                const chars = mySplitText.chars;
                const elem = chars[0];
                const rect = elem.getBoundingClientRect();
                gsap.set(chars, {
                    transformOrigin: 'center bottom'
                });
                tl.from(chars, {
                    y: -1 * (rect.y + charH + 500),
                    fontWeight: 400,
                    fontStretch: 80,
                    scaleY: 2,
                    ease: "elastic(0.2, 0.1)",
                    duration: 1.5,
                    delay: 0.5,
                    stagger: {
                        each: 0.05,
                        from: 'random'
                    }
                }, 0);
                gsap.fromTo(
                    [textRef1.current, textRef2.current],
                    { opacity: 0, },
                    {
                        opacity: 1,
                        delay: 1,
                        duration: 3,
                        ease: "power2.out",
                    }
                );
            }, textRef);
            return () => ctx.revert();
        });
    }, []);

    return (
        <div className='mt-[30%] flex flex-col justify-end items-center w-fit ml-auto relative p-[1rem] bg-center bg-cover'>
            <div className='absolute left-[8.5rem] top-7'>
                <p ref={textRef1} className='text-[1.5rem] font-bold'>I do</p>
            </div>
            <p ref={textRef} className='text-[5rem] font-bold jelly-text'>~design~</p>
            <p ref={textRef2} className='w-[20rem] text-justify p-[.5rem]'>I create my own image assets and logos from scratch. I'm highly proficient with Photoshop and Illustrator, bringing concepts to life with creativity.</p>
        </div>
    )
}

export default IdoDesign