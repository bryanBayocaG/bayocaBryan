

function HeroSection() {
    return (
        <section
            id="home"
            className="hero-path relative h-[95vh] bg-[url(/polygonialBGW.svg)] dark:bg-[url(/polygonialBG.svg)] bg-center bg-size-[300%] md:bg-size-[200%] bg-no-repeat bg-[#f7f7f7] dark:bg-[#0f172a]">
            <div className="absolute flex  flex-col md:flex-row items-center justify-between w-full h-full ">
                <div className="w-full h-full  relative">
                    <div className="absolute right-0 bottom-[4.5rem] md:bottom-none md:top-[15rem] h-[50rem] lg:top-2 lg:h-[55rem]">
                        <img src="/bryanLeft.png" className=" w-full h-full" alt="bryan photo" />
                    </div>
                    <p>Part coder</p>
                </div>
                <div className="hidden md:block w-full h-full  relative">
                    <div className="absolute left-0 top-[15rem]  h-[50rem]  lg:top-2 lg:h-[55rem]">
                        <img src="/bryanRight.png" className=" w-full h-full" alt="bryan photo" />
                    </div>
                    <p>Part coder</p>
                </div>
            </div>

        </section>

    )
}

export default HeroSection