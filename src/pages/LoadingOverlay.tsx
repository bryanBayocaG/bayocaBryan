import Cat from "../components/Cat"

function LoadingOverlay() {
    return (
        <div className='absolute top-0 right-0 h-full w-full bg-white dark:bg-[#0f172a] z-50'>
            <div className="flex relative flex-col h-full justify-center items-center">
                <div className="absolute flex flex-col justify-center items-center top-[10rem] md:top-0 h-[50rem] w-[95vw]">
                    <Cat />
                    <p className="text-[2rem] ">Loading...</p>
                </div>

            </div>
        </div>
    )
}

export default LoadingOverlay