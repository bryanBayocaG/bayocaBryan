import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch"


function Header() {
    return (
        <header className="fixed top-0 w-full flex justify-between px-[2rem] py-[2rem] items-center bg-transparent z-20">
            <div className="h-[4rem]">
                <img className="w-full h-full" src="/BYN.svg" alt="logo" />
            </div>
            <div className="flex items-center justify-center gap-[1rem]">
                <ThemeSwitch />
                <a
                    href="https://github.com/bryanBayocaG"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={
                        "relative dark:text-neutral-50 items-center flex space-x-[.5rem] text-neutral-600 hover:text-primary"
                    }
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
                    className={
                        "relative dark:text-neutral-50 items-center flex space-x-[.5rem] text-neutral-600 hover:text-primary"
                    }
                >
                    <FaLinkedin className="w-[2rem] h-[2rem]" />
                    <span className="hidden md:block text-[1.5rem] !cursor-pointer">
                        Linkedin
                    </span>
                </a>
            </div>
        </header>
    )
}

export default Header