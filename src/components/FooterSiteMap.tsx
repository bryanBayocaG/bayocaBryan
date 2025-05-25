

function FooterSiteMap() {
    return (
        <div className="hidden md:block flex-1">
            <div className="flex flex-col items-center gap-y-3 z-[1000]">

                <h5 className="heading font-bold text-center whitespace-nowrap">
                    Sections to <span className="text-primary font-bold">Navigate</span>
                </h5>
                <a href="#home" className="hover:text-primary text-[1.5rem]">Home</a>
                <a href="#tech_stack" className="hover:text-primary text-[1.5rem]">My Tech-stack</a>
                <a href="#my_path" className="hover:text-primary text-[1.5rem]">My Path</a>
                <a href="#my_projects" className="hover:text-primary text-[1.5rem]">My Project</a>
            </div>
        </div>
    )
}

export default FooterSiteMap