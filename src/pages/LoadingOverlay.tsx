
function LoadingOverlay() {
    return (
        <div className='absolute top-0 right-0 h-full w-full bg-white dark:bg-[#0f172a] z-50'>
            <div className="flex h-full justify-center items-center">
                <p className="text-[2rem]">Loading...</p>
            </div>
        </div>
    )
}

export default LoadingOverlay