

function FooterSiteMap() {
    return (
        <div className="hidden md:block flex-1">
            <div className="flex flex-col items-center gap-y-3 z-[1000]">

                <h5 className="heading font-bold text-center whitespace-nowrap">
                    Sections to <span className="text-primary font-bold">Navigate</span>
                </h5>
                <a href="#home" className="hover:text-primary text-[1.5rem]">Home</a>
                <a href="#about" className="hover:text-primary text-[1.5rem]">About Me</a>
                <a href="#experience" className="hover:text-primary text-[1.5rem]">My Experience</a>
                <a href="#projects" className="hover:text-primary text-[1.5rem]">My Project</a>
            </div>
        </div>
    )
}

export default FooterSiteMap