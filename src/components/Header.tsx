import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch"


function Header() {
    return (
        <header className="flex justify-between px-4 py-2 shadow-lg dark:shadow-none items-center bg-transparent">
            <div className="h-12">
                <img className="w-full h-full" src="/BYN.svg" alt="logo" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <ThemeSwitch />
                <a
                    href="https://github.com/bryanBayocaG"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={
                        "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                    }
                >
                    <FaGithub className="w-7 h-7" />
                    <span className="hidden md:block text-sm !cursor-pointer">
                        Github
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/bryan-bayoca"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={
                        "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                    }
                >
                    <FaLinkedin className="w-7 h-7" />
                    <span className="hidden md:block text-sm !cursor-pointer">
                        Linkedin
                    </span>
                </a>
            </div>
        </header>
    )
}

export default Header