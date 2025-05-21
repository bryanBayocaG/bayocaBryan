import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Header() {
    const [scrollValue, setScrollValue] = useState(0);
    const headerRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current, { y: -100 }, {
                y: 0,
                duration: 1.5,
                ease: "power2.out",
            });
        }, headerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        let lastScroll = window.scrollY;
        const anim = gsap.quickTo(headerRef.current, "y", {
            duration: 0.8,
            ease: "power2.out",
        });

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const scrollingUp = currentScroll < lastScroll;

            if (currentScroll > 200 && !scrollingUp) {
                anim(-150);
            } else {
                anim(0);
            }

            lastScroll = currentScroll;
            setScrollValue(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className={`header fixed top-0 w-[95vw] left-1/2 -translate-x-1/2 rounded-b-[1rem] flex justify-between px-[2rem] py-[2rem] items-center z-20 ${scrollValue > 0 ? 'backdrop-blur-[.5rem]' : 'bg-transparent'} `}>
            <div className="h-[4rem]">
                <img className="w-full h-full" src="/BYN.svg" alt="logo" />
            </div>
            <div className="flex items-center justify-center gap-[1rem]">
                <ThemeSwitch />
                <a
                    href="https://github.com/bryanBayocaG"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative dark:text-neutral-50 items-center flex space-x-[.5rem] text-neutral-600 hover:text-primary"
                >
                    <FaGithub className="w-[2rem] h-[2rem]" />
                    <span className="hidden md:block text-[1.5rem] !cursor-pointer">
                        Github
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/bryan-bayoca"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative dark:text-neutral-50 items-center flex space-x-[.5rem] text-neutral-600 hover:text-primary"
                >
                    <FaLinkedin className="w-[2rem] h-[2rem]" />
                    <span className="hidden md:block text-[1.5rem] !cursor-pointer">
                        Linkedin
                    </span>
                </a>
            </div>
        </header>
    );
}

export default Header;
